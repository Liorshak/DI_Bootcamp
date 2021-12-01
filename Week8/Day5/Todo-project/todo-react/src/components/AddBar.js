import "./AddBar.css";

const AddBar = (props) => {
  const { addTask, addValue } = props;

  return (
    <div>
      <h5 style={{ color: "grey" }}>Add a new Todo:</h5>
      <input
        id="addBar"
        type="text"
        onKeyDown={addTask}
        // onChange={addValue}
        style={{ border: "none", borderBottom: "1px solid gray" }}
      />
    </div>
  );
};

export default AddBar;
