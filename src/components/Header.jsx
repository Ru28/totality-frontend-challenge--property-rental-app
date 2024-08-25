import  React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { BookingContext } from "../utils/BookingContext";
import { AuthContext } from "../utils/AuthContext"; // Context to manage authentication
import { Menu, Transition } from "@headlessui/react"; // For the dropdown menu

const Header = () => {
  const { cartItems } = useContext(BookingContext);
  const { user, logout } = useContext(AuthContext); // Access user data and logout function

  return (
    <header className="bg-white shadow-md py-3 fixed z-50 border-b justify-center flex w-full font-light md:px-28">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="px-2 my-1">
          <h1 className="text-xl font-semibold">Property Rental Platform</h1>
        </div>
        <div className="p-2 m-2 flex gap-x-8 text-xs md:text-base">
          {!user ? (
            <div>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          ) : (
            <>
              {/* Property List Form and Cart Tabs (Visible only if user is logged in) */}
              <div>
                <Link to="/propertyListForm">
                  <span>PropertyListForm</span>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="relative bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200">
                  <span>Cart</span>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </Link>
              </div>
              {/* User Profile Dropdown Menu */}
              <div className="relative">
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center space-x-2 focus:outline-none">
                    <img
                      src={user.avatar} // Replace with actual avatar URL from the user object
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span> {/* Display the user's name */}
                  </Menu.Button>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={`block px-4 py-2 text-sm ${active ? "bg-gray-100" : "text-gray-700"}`}
                            >
                              Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings"
                              className={`block px-4 py-2 text-sm ${active ? "bg-gray-100" : "text-gray-700"}`}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100" : "text-gray-700"}`}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
