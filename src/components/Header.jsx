import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import logo from "../assets/logo.png"

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className="bg-white shadow-md py-4">
    </header>
  )
}

export default Header