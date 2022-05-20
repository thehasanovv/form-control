import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioButtons = ({ name, label, options, ...rest }) => {
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field, form }) => {
          console.log(form);
          const { value } = field;
          const { setFieldValue } = form;
          return (
            <FormControl
              {...rest}
              error={form.errors[name] && form.touched[name]}
            >
              <FormLabel>{label}</FormLabel>
              <RadioGroup
                name={name}
                value={value}
                onChange={(val) => setFieldValue(name, val.target.value)}
                {...field}
              >
                {options.map((option) => {
                  return (
                    <FormControlLabel
                      control={<Radio />}
                      label={option.label}
                      key={option.value}
                      value={option.value}
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText>
                {form.errors[name] && form.touched[name] && form.errors[name]}
              </FormHelperText>
            </FormControl>
          );
        }}
      </Field>
    </div>
  );
};

export default RadioButtons;
