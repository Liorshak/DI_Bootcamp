import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NewBook from "./components/NewBook";
import UserInput from "./components/UserInput";
import ErrorBoundary from "./components/ErrorBoundary";

import ProfileScreen from "./components/ProfileScreen";
import HomeScreen from "./components/HomeScreen";
import ShopScreen from "./components/ShopScreen";
import { Routes, Route, Outlet, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      author: "",
      genre: "",
      yearPub: "",
      bookArr: [],
      notice: false,
      flag: false,
      user: null,
      fName: "",
      lName: "",
      phoneNum: "",
      email: "",
    };
  }
  reset = () => {
    this.setState({
      title: "",
      author: "",
      genre: "",
      yearPub: "",
      flag: false,
    });
  };

  sendUser = (event) => {
    event.preventDefault();
    let { fName, lName, phoneNum, email } = this.state;
    this.setState({ user: { fName, lName, phoneNum, email }, flag: true });
  };

  getFName = (event) => {
    let input = event.target.value;
    input = input.replace(/[0-9]/g, "");
    this.setState({ fName: input });
  };

  getLName = (event) => {
    let input = event.target.value;
    input = input.replace(/[0-9]/g, "");
    this.setState({ lName: input });
  };

  getPhone = (event) => {
    this.setState({ phoneNum: event.target.value });
  };

  getEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  getTitle = (event) => {
    this.setState({ title: event.target.value, notice: false });
  };

  getAuthor = (event) => {
    this.setState({ author: event.target.value, notice: false });
  };

  getGenre = (event) => {
    this.setState({ genre: event.target.value, notice: false });
  };

  getYearPub = (event) => {
    this.setState({ yearPub: event.target.value, notice: false });
  };

  sendData = (event) => {
    event.preventDefault();
    this.setState({
      bookArr: [
        ...this.state.bookArr,
        {
          title: this.state.title,
          author: this.state.author,
          genre: this.state.genre,
          yearPub: this.state.yearPub,
        },
      ],
      notice: true,
    });
  };

  // render() {
  //   console.log(this.state.bookArr[this.state.bookArr.length - 1]);
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         {/* <NewBook
  //           notice={this.state.notice}
  //           getTitle={this.getTitle}
  //           getAuthor={this.getAuthor}
  //           getGenre={this.getGenre}
  //           getYearPub={this.getYearPub}
  //           sendData={this.sendData}
  //         /> */}

  //         <UserInput
  //           getFName={this.getFName}
  //           getLName={this.getLName}
  //           getPhone={this.getPhone}
  //           getEmail={this.getEmail}
  //           sendUser={this.sendUser}
  //           flag={this.state.flag}
  //           user={this.state.user}
  //           reset={this.reset}
  //         />
  //       </header>
  //     </div>
  //   );
  // }

  render() {
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
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />

          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>

        <Outlet />
      </div>
    );
  }
}
export default App;
