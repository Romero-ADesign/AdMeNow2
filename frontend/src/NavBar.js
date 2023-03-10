import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div id="container">
      <nav id="header">
        <h1>Ad Me Now</h1>
        <h2>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/mypage">MyPage</Link>
          </li>
        </h2>
      </nav>

      <Outlet />
      </div>
    </>
  );
};

export default NavBar;
