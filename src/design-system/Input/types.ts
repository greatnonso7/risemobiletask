export interface InputProps {
  title?: string;
  onChangeValue?: (val: number | string | Date) => void;
  data?: any;
  value?: string | number;
  password?: boolean;
  onTogglePassword?: () => void;
  onToggleDropDown?: () => void;
  type?: 'crypto' | 'calendar' | 'longPress' | 'select';
  isDropDown?: boolean;
  isMultiLine?: boolean;
  onLongPress?: () => void;
  onSelectChange?: (val: number | string) => void;
  isLoading?: boolean;
  blurText?: () => void;
  open?: boolean;
}
