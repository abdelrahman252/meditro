import React from "react";
import logo from "../../assets/media/logo.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="login">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xl={5} lg={6} md={8}>
            <div className="login-wrapper signup">
              <img src={logo} alt="login-logo" />
              <Form>
                <Form.Group className="mt-5 mb-3 ">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className=" mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className=" mb-3">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" size="lg" className="color">
                    Register now
                  </Button>
                </div>
                <div class="text-center mt-5">
                  <p>Already have Account</p>
                  <Link to="/login">
                    <div className="d-grid gap-2">
                      <Button type="submit" size="lg" className="color2">
                        Login
                      </Button>
                    </div>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
