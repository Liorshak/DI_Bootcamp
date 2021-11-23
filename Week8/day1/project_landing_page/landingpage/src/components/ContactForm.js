import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

<script
  crossorigin
  src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
></script>;

const ContactForm = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <Container>
        <Row>
          <Col>
            <div className="mt-4 text-start">
              <p className="text-left" style={{ fontSize: "13px" }}>
                Contact us and we will get back to you in 24 hours. <br />
                <i className="fas fa-map-marker-alt"></i> Company Name <br />
                <i className="fas fa-mobile-alt"></i> +972-54-5584414 <br />
                <i className="far fa-envelope"></i> liorshak1986@gmail.com
              </p>
            </div>
          </Col>
          <Col>
            <div className="text-left">
              <Form>
                {" "}
                <strong> Contact</strong>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="outline-warning" style={{ width: "100%" }}>
                  Submit
                </Button>{" "}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
