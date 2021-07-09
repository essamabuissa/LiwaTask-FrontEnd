import { NavBarStyle, NavItem } from "../screens/Home/styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyle>
      <Link to="/signup">
        <NavItem>Sign Up</NavItem>
      </Link>
      <Link to="/">
        <NavItem>Home</NavItem>
      </Link>
    </NavBarStyle>
  );
};
export default NavBar;
