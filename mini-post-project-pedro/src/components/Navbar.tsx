import {Link} from "react-router-dom";
import { auth } from "../config/firebase";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};