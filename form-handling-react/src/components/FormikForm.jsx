import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Register (Formik)
          </h2>

          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full border p-3 rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-3 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
