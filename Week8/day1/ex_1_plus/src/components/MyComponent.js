import logo from "../logo.svg";

const mystyle = {
  color: "white",
  background: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const mySuperStyles = {
  color: "yellow",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1px solid yellow",
  backgroundColor: "black",
  padding: "5px",
  borderRadius: "8px",
  cursor: "pointer",
  margin: "10px",
};

const MyComponent = () => {
  return (
    <div>
      <header style={mystyle}>
        {/* <header style={{ color: "red", backgroundColor: "lightblue" }}> */}
        {/* <h1>This is a header</h1> */}
        <h1> Hello style!</h1>
      </header>
      <p>This is a paragraph</p>

      <a>This is a link</a>
      <form>
        <h1>This is a form</h1>
        <label>Enter your name</label>
        <br />
        <input type="text" name="input" />
        <button style={mySuperStyles}>Submit</button>
      </form>
      <h3>Here is an image:</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <h4>There is a list</h4>

      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </div>
  );
};

export default MyComponent;
