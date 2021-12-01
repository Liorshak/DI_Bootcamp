import { Link } from "react-router-dom";
const ProfileScreen = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          margin: "5px",
        }}
      >
        <Link style={{ margin: "5px" }} to="/">
          Home
        </Link>
        <Link style={{ margin: "5px" }} to="/profile">
          profile
        </Link>{" "}
        |{" "}
        <Link style={{ margin: "5px" }} to="/shop">
          Shop
        </Link>
      </nav>
      <h1> Welcome to my Protfolio</h1>
    </div>
  );
};

export default ProfileScreen;
