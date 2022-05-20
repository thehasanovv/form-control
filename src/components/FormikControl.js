import Input from "./Input";
import BirthDate from "./DatePicker";
import RadioButtons from "./RadioButtons";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "date":
      return <BirthDate {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
  }
};

export default FormikControl;
