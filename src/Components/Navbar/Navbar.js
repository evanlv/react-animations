import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Listing</Link>
      <Link to="/stateAnim">State</Link>
      <Link to="/scroll">Scroll</Link>
    </nav>
  );
};

export default Navbar;
