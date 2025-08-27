export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
      <div className="font-bold text-lg">Smart Academy</div>
      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Courses</li>
        <li className="hover:underline cursor-pointer">My profile</li>
        <li className="hover:underline cursor-pointer">Support</li>
        <li className="hover:underline cursor-pointer">Logout</li>
      </ul>
    </nav>
  );
}