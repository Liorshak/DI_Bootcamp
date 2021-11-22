import Card from "./Card.js";

const CardList = (props) => {
  const { arr_robots } = props;
  console.log(arr_robots);
  return (
    <div className="flex justify-center flex-wrap">
      {arr_robots.map((item) => {
        return <Card robot={item} />;
      })}
    </div>
  );
};

export default CardList;
