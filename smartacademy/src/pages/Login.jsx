import { useFormik } from "formik";
import * as Yup from "yup";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc"; 

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        const name = user.displayName || values.email.split("@")[0]; 
        toast.success(`Welcome back, ${name} 👋`);
        navigate("/home", { state: { name } }); 
      } catch (err) {
        toast.error(err.message);
      }
      setSubmitting(false);
    },
  });

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const name = user.displayName || "User";
      toast.success(`Welcome, ${name} 🎉`);
      navigate("/home", { state: { name } });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="card w-96 bg-white shadow-xl p-6">
        
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          LOGIN
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="btn w-full bg-blue-900 text-white hover:bg-blue-800"
          >
            Login
          </button>
        </form>

        {/* Divider OR */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google login */}
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FcGoogle size={20} /> Login with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}