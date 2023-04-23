import { Link } from "react-router-dom";
// This is for navigating into new pages like login pages
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const handleLogin = () => {
    Navigate("/login");
    // handle account login logic here
  };
  const handleCreateAccount = () => {
    Navigate("/register");
  };
  const handleGoToHome = () => {
    Navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white flex justify-between items-center px-4 py-3">
      <div className="flex items-center">
        <button
          onClick={handleGoToHome}
          className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Home{" "}
        </button>
        <button
          onClick={handleCreateAccount}
          className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </button>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
      <div className="relative">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Dropdown
        </button>
        <ul className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10 hidden">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-900"
            >
              Option 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-900"
            >
              Option 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-900"
            >
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
