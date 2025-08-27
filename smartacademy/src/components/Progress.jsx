export default function Progress() {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold mb-4">Your Progress</h2>
      <div className="mb-4">
        <p className="flex justify-between text-sm">
          <span>JavaScript Fundamentals</span> <span>40%</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-800 h-2 rounded-full w-[40%]"></div>
        </div>
      </div>

      <div>
        <p className="flex justify-between text-sm">
          <span>Python Basics</span> <span>80%</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-800 h-2 rounded-full w-[80%]"></div>
        </div>
      </div>
    </div>
  );
}