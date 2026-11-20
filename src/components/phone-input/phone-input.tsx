import { Phone } from "lucide-react-native";
import React, { useMemo } from "react";
import { View } from "react-native";

import {
  FormTextInput,
  FormTextInputProps,
} from "@/components/form-text-input/form-text-input";
import { useTheme } from "@/hooks/use-theme";
import { formatPhoneNumber } from "@/utils/formatters";
import { createStyles } from "./phone-input.styles";

export interface PhoneInputProps extends Omit<
  FormTextInputProps,
  | "label"
  | "icon"
  | "keyboardType"
  | "autoComplete"
  | "maxLength"
  | "onChangeText"
> {
  label?: string;
  onChangePhone: (formattedValue: string) => void;
}

export function PhoneInput({
  label = "Phone Number",
  placeholder = "(713) 555-0194",
  onChangePhone,
  ...rest
}: PhoneInputProps) {
  const themeColor = useTheme();
  const styles = useMemo(() => createStyles(themeColor), [themeColor]);

  return (
    <View style={styles.wrapper}>
      <FormTextInput
        {...rest}
        label={label}
        icon={Phone}
        placeholder={placeholder}
        keyboardType="phone-pad"
        autoComplete="tel"
        maxLength={14}
        returnKeyType="done"
        onChangeText={(raw) => onChangePhone(formatPhoneNumber(raw))}
      />
    </View>
  );
}
