import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

import { Helmet } from "../components";

import logo from "../assets/images/image-01.png";

import "../styles/login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setName("");
    setPassword("");
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Helmet title="تسجيل دخول">
      <section className="login">
        <Container>
          <Row>
            <Col xxl="12" className="text-center mt-3 mb-2">
              <h1 className="login__title">
                Welcome to <br />
                <span className="login__title-highlight">
                  Gynecological Oncology Unit
                </span>
                <br />
                Mansoura University Medicine
              </h1>
            </Col>
            <Col
              xxl="4"
              xl="5"
              lg="6"
              md="8"
              sm="10"
              xs="12"
              className="m-auto text-center mb-3"
            >
              <form className="form login__form" onSubmit={submitLoginHandler}>
                <div className="form__header">
                  <img src={logo} alt="logo" className="logo" />
                  <h2 className="form__title">Login Account</h2>
                </div>
                <div className="form__group">
                  <label htmlFor="name">Enter Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    className="form__input"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form__group mt-3">
                  <label htmlFor="password">Enter Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    id="password"
                    className="form__input"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__group reset__group mb-4 align-items-start">
                  <span className="reset__password">
                    Forget Password? <Link to="/forgot-password">Reset</Link>
                  </span>
                </div>
                <button type="submit" className="login__btn">
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
