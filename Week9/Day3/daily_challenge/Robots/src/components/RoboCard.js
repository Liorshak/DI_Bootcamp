import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button'

const RoboCard = ({ robot }) => {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "lightgreen",
          fontSize: "12px",
          width: "180px",
          height: "270px",
        }}
      >
        <Card.Img
          variant="top"
          style={{
            width: "120px",
            margin: "auto",
            borderRadius: "50%",
            backgroundColor: "palevioletred",
            marginTop: "10px",
          }}
          src={`https://robohash.org/${robot.id}?size=200x200`}
        />
        <Card.Body>
          <Card.Title>{robot.name}</Card.Title>
          <Card.Text style={{ fontSize: "0.7em" }}>
            <p>
              {" "}
              Hello i like to be called {robot.username}
              <br />i work in {robot.company.name} <br />
              My personal website is: {robot.address.website}
              <br />
              My email is: {robot.email}
            </p>
          </Card.Text>
          {/* <Button variant="primary">Go to my website</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoboCard;
