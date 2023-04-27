import { useState } from "react";
import { Link } from "react-router-dom";
// This is for navigating into new pages like login pages
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownToggle() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div className="bg-cyan-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-gray-300 hover:text-white mr-4">
              Home
            </Link>
            <Link
              to="/register"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login{" "}
            </Link>

            <Link to="/chats" className="text-gray-300 hover:text-white p-3">
              Chats{" "}
            </Link>
          </div>
          <div>
            <div>
              <div className="relative">
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={handleDropdownToggle}
                  onBlur={() => setShowDropdown(false)}
                >
                  Link 3
                </button>
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
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
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
