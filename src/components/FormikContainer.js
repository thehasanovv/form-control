import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const radioOptions = [
    { value: "male", label: "Male" },
    { value: "famele", label: "Female" },
  ];

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    number: "",
    password: "",
    passwordConfirmation: "",
    radioOption: "",
    birthDate: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    number: Yup.string().required("Required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    radioOption: Yup.string().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values, form) => {
    console.log("Form data", values);
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
    form.resetForm();
    form.setSubmitting(false);
    alert(JSON.stringify(values));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="form">
              <h1 className="title">Registration</h1>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
                variant="filled"
              />
              <FormikControl
                control="input"
                type="text"
                label="Surname"
                name="surname"
                variant="filled"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                variant="filled"
              />
              <FormikControl
                control="input"
                type="number"
                label="Number"
                name="number"
                variant="filled"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                variant="filled"
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm password"
                name="passwordConfirmation"
                variant="filled"
              />
              <FormikControl
                control="date"
                label="Birth year"
                name="birthDate"
                variant="filled"
              />
              <FormikControl
                control="radio"
                label="Gender"
                name="radioOption"
                variant="filled"
                options={radioOptions}
              />
              <button
                type="submit"
                className="registerButton"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikContainer;
