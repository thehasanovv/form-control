import React from "react";
import { Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function BirthDate(props) {
  const { name, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(val) => setFieldValue(name, val)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...field}
                    {...rest}
                    error={form.errors[name] && form.touched[name]}
                    helperText={
                      form.errors[name] &&
                      form.touched[name] &&
                      form.errors[name]
                    }
                    style={{ width: "345px" }}
                  />
                )}
              />
            </LocalizationProvider>
          );
        }}
      </Field>
    </div>
  );
}

export default BirthDate;
