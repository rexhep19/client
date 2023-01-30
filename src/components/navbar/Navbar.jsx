import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  return (
    <div className="Navbar ">
      <div className="navbarLeft">
        <i className="navbarSocial fa-brands fa-instagram"></i>
        <i className="navbarSocial fa-brands fa-facebook"></i>
        <i className="navbarSocial fa-brands fa-square-twitter"></i>{" "}
      </div>
      <div className="navbarCenter">
        <ul className="navbarLinksHolder">
          <li className="navbarLinks">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navbarLinks">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="navbarLinks">
            <Link className="link" to={"write"}>
              Write
            </Link>
          </li>
          {user ? (
            <li className="navbarLinks">
              <Link className="link" to={"/"}>
                Logout
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="navbarRight">
        {user ? (
          <img
            className="navbarImg"
            src="https://images.pexels.com/photos/7567538/pexels-photo-7567538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {user ? (
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
