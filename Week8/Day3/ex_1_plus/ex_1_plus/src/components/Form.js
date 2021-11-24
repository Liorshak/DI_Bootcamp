const Form = (props) => {
  const { func, username, submitIt, age, errMsg, txtArea } = props;

  return (
    <div>
      <form onSubmit={submitIt}>
        <h1>
          Hello {username}
          {age || ""}
        </h1>
        <span>Enter your name:</span>
        {/* <input type="text" onChange={func} /> */}
        <input type="text" id="usernameInput" onKeyPress={func} /> <br />
        <span>Enter your age:</span>
        <input type="text" /> <strong>{errMsg}</strong>
        <br />
        <textarea placeholder={txtArea}></textarea>
        <br />
        <select defaultValue="volvo">
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
