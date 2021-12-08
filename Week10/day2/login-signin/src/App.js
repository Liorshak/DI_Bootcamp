import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sign_username: "",
      sign_password: "",
      fName: "",
      lName: "",
      email: "",
      register_info: "",
      login_username: "",
      login_password: "",
      login_info: "",
      submitRegi: true,
      submitLogin: true,
    };
  }

  successRegi = () => {
    const { sign_username, sign_password, lName, email, fName } = this.state;
    console.log(
      sign_username,
      sign_password,
      lName,
      email,
      fName,
      this.state.submitRegi
    );
    if (
      sign_username != "" &&
      sign_password != "" &&
      lName != "" &&
      email != "" &&
      fName != ""
    ) {
      this.setState({ submitRegi: false });
    } else {
      this.setState({ submitRegi: true });
    }
  };

  successLogin = () => {
    const { login_username, login_password } = this.state;
    console.log(login_username, login_password, this.state.submitLogin);
    if (login_username != "" && login_password != "") {
      this.setState({ submitLogin: false });
    } else {
      this.setState({ submitLogin: true });
    }
  };

  getLogin_username = (event) => {
    this.setState({ login_username: event.target.value });
    this.successLogin();
  };
  getLogin_password = (event) => {
    this.setState({ login_password: event.target.value });
    this.successLogin();
  };

  getSign_username = (event) => {
    this.setState({ sign_username: event.target.value });
    this.successRegi();
  };

  getSign_password = (event) => {
    this.setState({ sign_password: event.target.value });
    this.successRegi();
  };
  getFName = (event) => {
    this.setState({ fName: event.target.value });
    this.successRegi();
  };
  getLName = (event) => {
    this.setState({ lName: event.target.value });
    this.successRegi();
  };

  getEmail = (event) => {
    this.setState({ email: event.target.value });
    this.successRegi();
  };

  register = (event) => {
    event.preventDefault();
    const { sign_username, sign_password, fName, lName, email } = this.state;
    let username = sign_username;
    let password = sign_password;

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password, fName, lName, email }),
    })
      .then((res) => res.json())
      .then((str) => {
        console.log("sent request received detail");
        this.setState({ register_info: str });
      })
      .catch((err) => console.log(err));
  };

  login = (event) => {
    event.preventDefault();
    const { login_username, login_password } = this.state;
    let username = login_username;
    let password = login_password;

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("sent request received detail");
        // login_info.innerText = res;
        this.setState({ login_info: res });
        console.log("this is the res", res);
        // if (res.auth ==="ok"){
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          login_info:
            "login information was not ok username or password not exist",
        });
      });
  };
  render() {
    const { submitRegi, register_info, submitLogin, login_info } = this.state;
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Signup
                submitRegi={submitRegi}
                register_info={register_info}
                getSign_username={this.getSign_username}
                getSign_password={this.getSign_password}
                getFName={this.getFName}
                getLName={this.getLName}
                getEmail={this.getEmail}
                register={this.register}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                getLogin_username={this.getLogin_username}
                getLogin_password={this.getLogin_password}
                submitLogin={submitLogin}
                login_info={login_info}
                login={this.login}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
