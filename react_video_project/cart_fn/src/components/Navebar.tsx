import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useShpopingCartContext } from "../context/ShopingCartContext";
function Navbar() {
  const { openCart, cartQuantity } = useShpopingCartContext();
  return (
    <nav className="mb-4 flex px-4 text-1xl gap-10 py-1 text-xl font-medium bg-white text-gray-500 shadow-sm justify-between">
      <ul className="flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-gray-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-gray-500"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-gray-500"
            }
          >
            Store
          </NavLink>
        </li>
      </ul>
      <button onClick={openCart} className="relative">
        <FontAwesomeIcon
          className="text-xl text-blue-600 border p-2 rounded-full hover:bg-blue-600 hover:text-white ease-linear duration-300"
          icon={faCartShopping}
        />
        <div
          style={{ fontSize: "10px" }}
          className=" absolute bottom-0 -right-1 bg-red-600 text-white  h-4 w-4 rounded-full flex justify-center items-center"
        >
          {cartQuantity}
        </div>
      </button>
    </nav>
  );
}

export default Navbar;
