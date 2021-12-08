import { Link, useNavigate } from "react-router-dom";

const Login = ({
  login_info,
  submitLogin,
  getLogin_username,
  getLogin_password,
  login,
}) => {
  let navigation = useNavigate();

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
      <form id="login" method="post" onSubmit={login}>
        <h2>Login</h2>
        Username:
        <br />{" "}
        <input
          type="username"
          name="username"
          placeholder="username"
          id="usernameL"
          onChange={getLogin_username}
        />
        <br />
        Password:
        <br />{" "}
        <input
          type="text"
          name="password"
          placeholder="password"
          id="passwordL"
          onChange={getLogin_password}
        />
        <br />
        <input
          type="submit"
          id="submitLogin"
          value="Login"
          disabled={submitLogin}
        />
        <br />
        <div>
          {login_info.auth === "ok" ? navigation("/dashboard") : "not ok"}
        </div>
      </form>
    </div>
  );
};

export default Login;
