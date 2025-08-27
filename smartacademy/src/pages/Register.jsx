import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirm: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        
        await updateProfile(userCred.user, { displayName: values.name });

        toast.success("Registration successful ✅");

        
        navigate("/home", { state: { name: values.name } });
      } catch (err) {
        toast.error(err.message);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster position="top-right" />
      <div className="card w-96 bg-white shadow-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          Register
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          <input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm}
          />
          {formik.touched.confirm && formik.errors.confirm && (
            <p className="text-red-500 text-sm">{formik.errors.confirm}</p>
          )}

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}