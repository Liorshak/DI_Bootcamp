import logo from "./logo.svg";
import "./App.css";
import AlertMsg from "./components/AlertMsg";

const colorClasses = {
  red: {
    color: "alert-danger",
    text: "OMG! Something really bad has happended!",
  },
  orange: { color: "alert-warning", text: "Well, its not bad after all!" },
  green: { color: "alert-success", text: " I am supposed to be green" },
};

const listColors = ["red", "orange", "green", "blue"];

function App() {
  // let color = "orange";

  {
    // part 2
    /* <AlertMsg text="OMG! Something really bad has happended!" show={true}  />
      <AlertMsg text="OMG! Something really bad has happended!" show={false}  /> */
  }

  // part 3
  // {
  //   if (color == "red") {
  //     return (
  //       <div className="App">
  //         <AlertMsg
  //           text="This is a danger alert-check it out!"
  //           show={true}
  //           color="alert-danger"
  //         />
  //       </div>
  //     );
  //   }
  //   if (color == "orange") {
  //     return (
  //       <div className="App">
  //         <AlertMsg
  //           text="OMG! Something really bad has happended!"
  //           show={true}
  //           color="alert-warning"
  //         />
  //       </div>
  //     );
  //   }
  // }

  return (
    <div>
      {listColors.map((item) => {
        if (colorClasses[item] != undefined) {
          return <AlertMsg info={colorClasses[item]} />;
        } else {
          alert(`this ${item} is not in the list`);
        }
      })}
    </div>
  );
}

export default App;
