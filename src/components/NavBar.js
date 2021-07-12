import { NavBarStyle, NavButton } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.candidatesReducer.user);
  return (
    <NavBarStyle>
      {user && (
        <text style={{ fontWeight: "bold", marginLeft: "10px" }}>
          Welcome {user.username}
        </text>
      )}
      {user?.role === "admin" ? (
        <Link to="/">
          <NavButton>Home</NavButton>
        </Link>
      ) : (
        <Link to="/signup">
          <NavButton>Sign Up</NavButton>
        </Link>
      )}
    </NavBarStyle>
  );
};
export default NavBar;
