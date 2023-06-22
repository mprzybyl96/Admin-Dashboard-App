export interface CalendarProps {
  events: [];
  setCurrentEvents: (events: any) => void;
}

export interface AccordionProps {
  title: string;
}

export interface TextFieldsProps {
  values: any;
  touched: any;
  errors: any;
  handleBlur: (args: any) => void;
  handleChange: (args: any) => void;
}

export interface SceneConsts {
  name: string;
  title: string;
  subtitle: string;
}
