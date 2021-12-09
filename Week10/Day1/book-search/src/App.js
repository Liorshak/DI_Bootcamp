import logo from "./logo.svg";
import "./App.css";
import Booklist from "./components/Booklist";
import Header from "./components/Header";
// import { useEffect } from "React";
// import { connect } from "React-redux";

function App({ getBooksList }) {
  // useEffect(() => {
  //   getBookList;
  // }, []);

  return (
    <div className="App">
      <Header />
      <Booklist />
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBooksList: () => dispatch(getBooksList()),
//   };
// };

export default App;
