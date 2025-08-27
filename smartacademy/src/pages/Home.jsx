import Navbar from "../layout/Navbar";
import Welcome from "../components/Welcome";
import Courses from "../components/Courses";
import Progress from "../components/Progress";
import Updates from "../components/Updates";
import Support from "../components/Support";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-6">
        <Welcome />
        <Courses />
        <Progress />
        <Updates />
        <Support />
      </div>
    </div>
  );
}