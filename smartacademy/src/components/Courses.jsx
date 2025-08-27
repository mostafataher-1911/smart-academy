import pyimg from "../assets/download (2).png";
import reactimg from "../assets/react.svg";
import jsimg from "../assets/download (1).png";

const courses = [
  { name: "JavaScript Fundamentals", progress: 40, img: jsimg },
  { name: "Python Basics", progress: 80, img: pyimg },
  { name: "React js", progress: 20, img: reactimg },
];

export default function Courses() {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-6 text-blue-900">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow-lg bg-white flex flex-col items-center hover:shadow-xl transition"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img src={c.img} alt={c.name} className="w-full h-full object-contain rounded" />
            </div>

            <h3 className="font-semibold text-lg mb-3 text-center">{c.name}</h3>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-blue-800 h-2 rounded-full"
                style={{ width: `${c.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mb-3">{c.progress}% completed</p>

        
            <button className="btn btn-primary btn-sm w-full">Enter Course</button>
          </div>
        ))}
      </div>
    </div>
  );
}
