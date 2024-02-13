import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

import "../styles/personal-information.css";

const PersonalInformation = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [birth, setBirth] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [relativeName, setRelativeName] = useState("");

  const reset = () => {
    setName("");
    setId("");
    setCode("");
    setBirth("");
    setAge("");
    setStatus("");
    setAddress("");
    setPhone("");
    setEmail("");
    setHomeNumber("");
    setRelativeName("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Personal Information">
      <section className="personal__information">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={false} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Personal Information</h1>
              </div>
            </Col>
            <Col lg="12" className="mt-4 col__form">
              <div className="form__container">
                <form
                  className="form"
                  action=""
                  method="post"
                  onSubmit={submitHandler}
                >
                  <Row className="d-flex justify-align-center justify-content-start">
                    <Col lg="12">
                      <Col lg="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="form__input"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="id">
                          ID
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your id"
                          id="id"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="code">
                          Code
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your code"
                          id="code"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="birth">
                          Date of Birth
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your date of birth"
                          id="birth"
                          value={birth}
                          onChange={(e) => setBirth(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="age">
                          Age
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your age"
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="status">
                          Marital status
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your marital status"
                          id="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="address">
                          Address
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your address"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="12" className="mt-5 mb-4">
                      <div className="page__title contact__information">
                        <h1 className="">Contact Information</h1>
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="phone">
                          Phone number
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="email">
                          E-mail
                        </label>
                        <input
                          className="form__input"
                          type="email"
                          placeholder="Enter your email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="homeNumber">
                          Home number
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your date of home number"
                          id="homeNumber"
                          value={homeNumber}
                          onChange={(e) => setHomeNumber(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5 mb-3">
                      <div className="form__group">
                        <label className="form__label" htmlFor="relativeName">
                          Relative name
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your relative name"
                          id="relativeName"
                          value={relativeName}
                          onChange={(e) => setRelativeName(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col
                      lg="12"
                      className="col__submit d-flex justify-content-end align-items-center mt-5"
                    >
                      <button
                        type="submit"
                        className="col-lg-2 col-sm-3 col-4 save__btn me-1"
                      >
                        Save
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PersonalInformation;
