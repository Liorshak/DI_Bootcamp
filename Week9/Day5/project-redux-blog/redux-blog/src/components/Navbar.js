import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="" class="brand-logo hide-on-small-and-down">
            My Blog
          </a>
          {/* <a href="#" data-target="mobile-demo" className="">
            <i className="material-icons">menu</i>
          </a> */}
          <ul className="">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="About">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="About">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
