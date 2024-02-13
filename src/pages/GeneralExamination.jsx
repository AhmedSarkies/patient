import React, { Fragment, useState } from "react";
import { Helmet, PersonalInformationComponent } from "../components";
import { Col, Container, Row } from "reactstrap";

import "../styles/general-examination.css";

const GeneralExamination = () => {
  const [bloodPressure, setBloodPressure] = useState("");
  const [height, setHeight] = useState("");
  const [pulse, setPulse] = useState("");
  const [weight, setWeight] = useState("");
  const [randomBloodSugar, setRandomBloodSugar] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setBloodPressure("");
    setHeight("");
    setPulse("");
    setWeight("");
    setRandomBloodSugar("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="General Examination">
      <section className="general__examination">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">General examination</h1>
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
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="height">
                          Height (cm)
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your height"
                          id="height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="pulse">
                          Pulse
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your pulse"
                          id="pulse"
                          value={pulse}
                          onChange={(e) => setPulse(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label className="form__label" htmlFor="weight">
                          Weight (Kg)
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your weight"
                          id="weight"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label
                          className="form__label"
                          htmlFor="randomBloodSugar"
                        >
                          Random blood sugar
                        </label>
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Enter your random blood sugar"
                          id="randomBloodSugar"
                          value={randomBloodSugar}
                          onChange={(e) => setRandomBloodSugar(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col lg="12">
                      <Col lg="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label
                            className="form__label"
                            htmlFor="bloodPressure"
                          >
                            Blood pressure
                          </label>
                          <input
                            className="form__input"
                            type="text"
                            placeholder="Enter your blood pressure"
                            id="bloodPressure"
                            value={bloodPressure}
                            onChange={(e) => setBloodPressure(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col lg="4" md="6" sm="8" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label
                            className="form__label"
                            htmlFor="investigation"
                          >
                            Investigation
                          </label>
                          <label
                            className="form__label form__label-file"
                            htmlFor="investigation"
                          >
                            {investigation ? (
                              investigation.split(`\\`).pop()
                            ) : (
                              <Fragment>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z"
                                    fill="#F0F0F0"
                                  />
                                </svg>
                                Upload File
                              </Fragment>
                            )}
                          </label>
                          <input
                            className="form__input form__input-file"
                            type="file"
                            placeholder=""
                            id="investigation"
                            value={investigation}
                            onChange={(e) => setInvestigation(e.target.value)}
                          />
                        </div>
                      </Col>
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

export default GeneralExamination;
