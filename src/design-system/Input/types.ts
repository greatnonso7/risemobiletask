export interface InputProps {
  title?: string;
  onChangeValue?: (val: number | string | Date) => void;
  data?: any;
  value?: string | number;
  password?: boolean;
  onTogglePassword?: () => void;
  onToggleDropDown?: () => void;
  type?: 'calendar' | 'longPress' | 'select' | 'phone';
  isDropDown?: boolean;
  isMultiLine?: boolean;
  onLongPress?: () => void;
  onSelectChange?: (val: number | string) => void;
  isLoading?: boolean;
  blurText?: () => void;
  label?: string;
  errorText?: string;
  dateFocused?: boolean;
  phoneFocused?: boolean;
}

export interface PhoneInputProps {
  setSelectedCountry?: (val: PhoneCountry) => void;
  selectedCountry?: any;
  setIsFocused: (val: boolean) => void;
  onFocus: (e: any) => void;
  onBlur: (e: any) => void;
  blurText?: () => void;
  isFocused?: boolean;
}

export interface CountryPickerModalProps {
  isVisible: boolean;
  onCloseModal: () => void;
  countryData?: any;
  onComplete?: (countryInfo: any) => void;
}

export type PhoneCountry = {
  id?: number;
  name: string;
  flag?: string;
  code?: string | number;
  dial_code?: string;
};
