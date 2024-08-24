import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="bg-white shadow-md py-3 fixed z-50 border-b justify-center flex w-full font-light md:px-28">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="px-2 my-1">
          <h1 className="text-xl font-semibold">property rental platform</h1>
        </div>
        <div className="p-2 m-2 flex gap-x-8 text-xs md:text-base">
          <div>
            <Link to="/login" >
              <span>Login</span>
            </Link>
          </div>
          <div>
            <Link to="/cart" className="relative bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200">
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length} {/* Number of items in the cart */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header