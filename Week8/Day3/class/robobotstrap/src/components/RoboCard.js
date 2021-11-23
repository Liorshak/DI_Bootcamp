import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class RoboCard extends React.Component {
  constructor() {
    super();
    this.state = {
      postsArr: [],
      count: 0,
    };
  }

  getPosts(id) {
    if (this.state.count % 2 == 0) {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ postsArr: data, count: this.state.count + 1 });
        });
    } else {
      console.log(this.state.count);
      this.setState({ postsArr: [], count: this.state.count + 1 });
    }
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <Card className="mx-auto" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`https://robohash.org/${info.id}?size=200x200`}
          />
          <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <Card.Text>
              <strong>He like to be named {info.username}</strong> and he from{" "}
              {info.address.city} works in {info.company.name} <br />
              <strong> Contact through:</strong>
              <br /> {info.email} <br />
              or by phone number <br />
              {info.phone}
            </Card.Text>
            <Button variant="primary" onClick={() => this.getPosts(info.id)}>
              See Posts
            </Button>
          </Card.Body>
        </Card>
        {this.state.postsArr.map((item, i) => {
          return (
            <Card key={"posts" + i + info.id + info.name}>
              <Card.Body>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default RoboCard;

{
  /* <a herf=></a> */
}
