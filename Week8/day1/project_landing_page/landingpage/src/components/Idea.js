import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Idea = (props) => {
  console.log(props);
  const { head, icon, body } = props.props;
  return (
    <div>
      <Row>
        <Col md={2} s={12}>
          <i className={icon}></i>
        </Col>
        <Col md={10} s={12}>
          <h2>
            <strong>{head}</strong>
          </h2>
          <p className="text-start p-3">{body}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Idea;
