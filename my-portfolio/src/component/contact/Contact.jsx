import React from "react";
import "./contact.css";
import { Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="contact-container container-fluid">
      <div>
        <h3>GET IN TOUCH </h3>
      </div>
      <div className="contact-box">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupname">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupname">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="text" placeholder="Enter your Subject" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Textarea"
            >
              <Form.Label>write Text HERE</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
             <Button type="submit">SEND MESSAGE</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
