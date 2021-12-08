import { Link } from "react-router-dom";

const Signup = ({
  register_info,
  submitRegi,
  getSign_username,
  getSign_password,
  getFName,
  getLName,
  getEmail,
  register,
}) => {
  return (
    <div>
      <nav>
        <Link to="/" style={{ margin: "10px" }}>
          Sign Up
        </Link>

        <Link to="/login" style={{ margin: "10px" }}>
          Login
        </Link>
      </nav>

      <form id="register" method="post" onSubmit={register}>
        <h2>Register</h2>
        First Name:
        <br />
        <input
          type="text"
          name="name"
          placeholder="write your first name"
          id="name"
          onChange={getFName}
        />
        <br />
        Last Name:
        <br />
        <input
          type="text"
          name="lName"
          placeholder="write your last name"
          id="lName"
          onChange={getLName}
        />
        <br />
        Email:
        <br />
        <input
          type="email"
          name="email"
          placeholder="your email"
          id="email"
          onChange={getEmail}
        />
        <br />
        Username: <br />
        <input
          type="username"
          name="username"
          placeholder="create a username"
          id="username"
          onChange={getSign_username}
        />
        <br />
        Password: <br />
        <input
          type="text"
          name="password"
          placeholder="create a new password"
          id="password"
          onChange={getSign_password}
        />
        <br />
        <input
          type="submit"
          id="submitRegi"
          value="Register"
          disabled={submitRegi}
        />
        <br />
        <div>{register_info}</div>
      </form>
    </div>
  );
};

export default Signup;
