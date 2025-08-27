import { useLocation } from "react-router-dom";

export default function Welcome() {
  const location = useLocation();
  const name = location.state?.name || "User"; 

  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-bold text-blue-900">
        Welcome, {name} 👋
      </h1>
      <button className="btn btn-outline mt-4">
        Continue Learning
      </button>
    </div>
  );
}
