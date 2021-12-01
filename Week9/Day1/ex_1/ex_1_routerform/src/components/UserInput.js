const UserInput = ({
  getFName,
  getLName,
  getPhone,
  getEmail,
  sendUser,
  flag,
  user,
  reset,
}) => {
  if (!flag) {
    return (
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: "20%",
          textAlign: "center",
        }}
      >
        <form onSubmit={sendUser}>
          <h1 style={{ color: "green" }}>Welcome</h1>
          <input type="text" onChange={getFName} placeholder="First name" />
          <br />
          <input type="text" onChange={getLName} placeholder="Last name" />{" "}
          <br />
          <input type="number" onChange={getPhone} placeholder="Phone name" />
          <br />
          <input type="email" onChange={getEmail} placeholder="Email" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: "20%",
          textAlign: "center",
        }}
      >
        <h3>
          {user.lName},{user.fName}
        </h3>
        <h3>
          {user.phoneNum}|{user.email}
        </h3>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
};

export default UserInput;
