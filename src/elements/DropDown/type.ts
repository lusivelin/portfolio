import { Dispatch, ReactNode, SetStateAction } from "react";

type Option = {
  value: string;
  label: ReactNode | string;
};

type CustomDropDownProps = {
  options: Option[];
  onChange: (value: Option) => void;
  cover?: (
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
  ) => ReactNode;
  defaultOption?: Option;
};

export default CustomDropDownProps;
