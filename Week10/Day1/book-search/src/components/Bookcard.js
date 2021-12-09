import { Card, Button } from "react-bootstrap";

const Bookcard = ({ book }) => {
  return (
    <Card
      style={{
        width: "18rem",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        style={{
          width: "200px",
          height: "200px",
          alignSelf: "center",
          marginBottom: "auto",
          marginTop: "10px",
        }}
        src={book.volumeInfo.imageLinks.thumbnail}
      />
      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Title style={{ fontSize: "15px" }}>
          {book.volumeInfo.authors}
        </Card.Title>
        <Card.Text style={{ maxHeight: "15vh", overflow: "auto" }}>
          {book.volumeInfo.description}
        </Card.Text>
        <Button
          style={{ marginTop: "auto" }}
          variant="primary"
          href={book.selfLink}
        >
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Bookcard;
