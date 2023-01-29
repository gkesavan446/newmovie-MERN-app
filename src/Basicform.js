import { useFormik } from "formik";
import * as yup from "yup";

const MovieValidataionSchema = yup.object({
  email: yup
    .string()
    .min(8, "Please provide a correct email")
    .required("Need a email address"),
  password: yup
    .string()
    .min(4, "Need a bigger password")
    .required("Need a password"),
});

export function Basicform() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: MovieValidataionSchema,
    onSubmit: (values) => {
      console.log("Formik values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        value={formik.values.password}
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : null}
      <button type="submit">Submit</button>
    </form>
  );
}
