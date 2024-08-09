import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-white-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-black">EleganceStay</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            className="flex text-black items-center px-3 font-bold hover:text-orange-600"
            to="/"
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-black px-3 font-bold hover:text-orange-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-black px-3 font-bold hover:text-orange-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-black-600 px-3 font-bold hover:bg-orange-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
