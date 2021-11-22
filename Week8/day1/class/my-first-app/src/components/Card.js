import "./Card.css";
import "tachyons";

const Card = (props) => {
  const { robot } = props;
  console.log(robot);
  const { name, email, username, id } = robot;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 shadow-5 w-30 ">
      <img src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <h4>{username}</h4>
    </div>
  );
};

export default Card;
