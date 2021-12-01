const TodoList = (props) => {
  const { todoArr, removeTask } = props;

  return (
    <div
      style={{
        border: "1px solid silver",
        width: "70vw",
        maxHeight: "55vh",
        overflow: "auto",
      }}
    >
      {todoArr.map((item, i) => {
        return (
          <li
            key={i}
            class="ph3 pv3 bb f5 bg-light-grey b--light-silver shadow "
            onClick={() => removeTask(i)}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
