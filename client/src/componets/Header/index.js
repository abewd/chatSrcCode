import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownToggle() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="bg-blue-500 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className={`text-lg hover:text-white mr-4 ${
                location.pathname === "/" ? "font-bold text-white" : "text-gray-300 "
              }`}
            >
              <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0_2184_6057)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.678 2.985a1.097 1.097 0 00-1.356 0l-8.813 6.96a.937.937 0 01-1.305-.143.909.909 0 01.145-1.288l8.813-6.96a2.973 2.973 0 013.676 0l8.813 6.96c.4.316.466.893.146 1.288a.937.937 0 01-1.306.143l-8.813-6.96zM3.894 9.309a.924.924 0 01.983.86l.434 7.138A2.082 2.082 0 007.4 19.25h7.2a2.082 2.082 0 002.09-1.943l.433-7.138c.03-.506.47-.89.983-.86.511.03.902.464.87.97l-.433 7.138c-.125 2.06-1.853 3.666-3.943 3.666H7.4c-2.09 0-3.818-1.607-3.943-3.666l-.434-7.138a.92.92 0 01.871-.97zM11 13.129c-.6 0-1.086.48-1.086 1.072 0 .592.486 1.072 1.086 1.072.6 0 1.086-.48 1.086-1.072 0-.592-.486-1.072-1.086-1.072zM8.057 14.2c0-1.605 1.318-2.905 2.943-2.905s2.943 1.3 2.943 2.905c0 1.604-1.318 2.905-2.943 2.905s-2.943-1.3-2.943-2.905z" fill="#ffffff"></path></g><defs><clipPath id="prefix__clip0_2184_6057"><path fill="#fff" d="M0 0h22v22H0z"></path></clipPath></defs></svg>
            </Link>
            <Link
              to="/register"
              className={` hover:text-white mr-4 ${
                location.pathname === "/register" ? "font-bold text-white" : "text-gray-300"
              }`}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={` hover:text-white ${
                location.pathname === "/login" ? "font-bold text-white" : " text-gray-300"
              }`}
            >
              Login
            </Link>
            <Link
              to="/chats"
              className={` hover:text-white p-3 hidden sm:block ${
                location.pathname === "/chats" ? "font-bold text-white" : " text-gray-300"
              }`}
            >
              Chats
            </Link>
          </div>
          <div>
            <div>
              <div className="relative">
                <button
                  className={`${showDropdown && 'font-bold text-white'} text-gray-300 hover:text-white`}
                  onClick={handleDropdownToggle}
                  onBlur={() => setShowDropdown(false)}
                >
                  Link 3
                </button>
                {showDropdown && (
                  <div className="absolute top-full z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Dropdown Link 1
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Dropdown Link 2
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <Link
              to="/chats"
              className={`text-gray-300 hover:text-white p-3 block sm:hidden ${
                location.pathname === "/chats" ? "font-bold" : ""
              }`}
            >
              Chats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
