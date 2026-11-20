# Wimora — Hair Braider Discovery & Booking App

A mobile-first hair braider discovery and appointment booking application built with **Expo** and **TypeScript**. Designed with a warm minimalist editorial aesthetic, Wimora enables clients to browse stylists, filter by name or specialty, inspect services and availability, and complete a booking flow.

---

## Core Features

1. **Braider Discovery (`/`):**
   - Displays a curated list of hair braiders with their name, specialty, rating, and starting price.
   - Real-time search by braider name or specialty with debounced filtering and instant clear-reset behavior.
   - Dedicated loading, empty-search, and error-recovery states.
2. **Braider Detail (`/braiders/[braiderId]`):**
   - Presents the braider's profile summary, full service menu (with pricing and formatted durations), and available appointment slots.
   - Supports optional pre-selection of a service and time slot before entering the booking flow.
3. **Appointment Booking & Confirmation (`/booking/[braiderId]` & `/booking/confirmation`):**
   - Guided booking form allowing customers to choose a service, pick an available time slot, and enter their name and US-formatted phone number with inline validation.
   - Generates a complete booking confirmation summary with a unique booking reference and safe stack replacement to prevent duplicate submissions.

---

## Tech Stack

- **Framework:** Expo SDK & React Native
- **Routing:** Expo Router (file-based typed navigation)
- **Language:** TypeScript (strict interfaces for domain models, navigation params, and component props)
- **Icons:** `lucide-react-native`
- **Safe Area & Keyboard Handling:** `react-native-safe-area-context` & `KeyboardAvoidingView`

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** or **yarn**
- **Expo Go** app on iOS/Android, or an **iOS Simulator** / **Android Emulator**

### Installation & Running Locally

1. **Clone the repository and install dependencies:**
   ```bash
   git clone <repository-url>
   cd wimora
   git checkout -b dev
   npm install
   ```

2. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

3. **Open the application:**
   - **Physical Device:** Scan the QR code displayed in the terminal using Expo Go (Android) or the Camera app (iOS).
   - **iOS Simulator:** Press `i` in the terminal.
   - **Android Emulator:** Press `a` in the terminal.

---

## Project Structure

```text
src/
├── app/                          # Thin Expo Router route files & Stack layout
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── braiders/[braiderId].tsx
│   └── booking/
│       ├── [braiderId].tsx
│       └── confirmation.tsx
├── components/                   # Some reusable UI primitives & smart feature containers include
│   ├── braider-card/
│   ├── braider-detail-container/
│   ├── braider-detail-header/
│   ├── braiders-container/
│   ├── phone-input/
│   ├── screen-wrapper/

├── constants/
│   └── theme.ts                  # Semantic color palettes, spacing, typography, and radii
├── features/
│   └── braiders/                 # Domain types, mock dataset, async fetchers, and hooks
│       ├── data.ts
│       ├── types.ts
│       └── hooks/
│           ├── use-braider.ts
│           └── use-braiders.ts
├── hooks/
│   ├── use-debounced-value.ts
│   └── use-theme.ts
├── screens/                      # Declarative screen 
└── utils/
    └── formatters.ts             # Currency, duration, phone masking, and reference helpers
```

---

## Key Architectural & Engineering Decisions

### 1. Strict Separation of Concerns (Routes, Screens, Containers, Primitives)
- **Thin Route Files (`app/`):** Route files strictly extract and normalize typed URL parameters via `useLocalSearchParams` and wrap screens in `ScreenWrapper`.
- **Custom Hooks (`useBraiders`, `useBraider`, `useDebouncedValue`):** Asynchronous data fetching, race-condition guards (`isActive` cleanup), retry triggers, and search filtering live in custom hooks rather than inside JSX components. Effects avoid synchronous `setState` calls to stay fully compliant with React Compiler lint rules.
- **Composable Atomic Inputs:** Base input styling, focus states, and validation messages are encapsulated in `FormTextInput` and specialized in `PhoneInput` so forms remain concise and DRY.

### 2. Design Token System & Separated Stylesheets
- All colors, spacing increments, border radii, and font sizes are centralized in `constants/theme.ts` with semantic tokens (`surface`, `primarySubtle`, `onPrimarySubtle`, `borderStrong`, `focus`, `error`) supporting both light and dark modes.
- Every component and screen isolates its `StyleSheet` inside a co-located `*.styles.ts` factory (`createStyles(themeColor)`) memoized via `useMemo`.

### 3. Tactile UX, Accessibility & Edge-Case Handling
- **Smart Debounced Search:** `useDebouncedValue` smooths keystroke filtering while snapping immediately to `""` when the user taps the clear button.
- **Pre-Selection Continuity:** Tapping a service or time slot on the Braider Detail screen passes those selections forward via route params to pre-populate the booking form.
- **Navigation Integrity:** Submitting a booking uses `router.replace()` to transition to the confirmation screen and disables back-swipe gestures on confirmation so completed bookings cannot be accidentally re-submitted.
- **Accessibility & Performance:** Interactive controls include `accessibilityRole`, `accessibilityLabel`, and `accessibilityState`; list items are memoized with `React.memo` and rendered via `FlatList` with `keyboardDismissMode="on-drag"`.

---

## What I Would Do Next

- **International Country Code Support in `PhoneInput`:** Enhance the `PhoneInput` component to pull and select international country calling codes (with region-aware formatting and validation) rather than defaulting strictly to a US 10-digit mask.
