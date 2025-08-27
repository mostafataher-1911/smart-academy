export default function Navbar() {
  return (
    <div className="navbar bg-blue-900 text-white px-6">
      <div className="navbar-start">
       
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>My profile</a></li>
            <li><a>Support</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Smart Academy</a>
      </div>

      {/* Center menu (hidden on small screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><a>Home</a></li>
          <li><a>Courses</a></li>
          <li><a>My profile</a></li>
          <li><a>Support</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );
}
