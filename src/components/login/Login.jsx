import React from "react";
import "./login.scss";
import logo from "../../assets/media/logo.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xl={5} lg={6} md={8}>
            <div className="login-wrapper">
              <img src={logo} alt="login-logo" />
              <Form>
                <Form.Group className="mt-5 mb-4">
                  <Form.Control type="text" placeholder="Username" size="lg" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" size="lg" className="color">
                    Login
                  </Button>
                </div>
                <p>Forgot Password?</p>
                <div class="text-center mt-5">
                  <p>Dont have any account?</p>
                  <Link to="/signup">
                    <div className="d-grid gap-2">
                      <Button type="submit" size="lg" className="color2">
                        Register
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

export default Login;
