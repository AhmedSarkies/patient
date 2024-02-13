import React, { Fragment, useState } from "react";

import { Helmet, PersonalInformationComponent } from "../components";

import { Col, Container, Row } from "reactstrap";

const ObstetricsHistory = () => {
  const [gravidity, setGravidity] = useState("");
  const [parity, setParity] = useState("");
  const [abortion, setAbortion] = useState("");
  const [notes, setNotes] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setGravidity("");
    setParity("");
    setAbortion("");
    setNotes("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Obstetrics history">
      <section className="obstetrics__history">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-3">
              <div className="page__title">
                <h1 className="">Obstetrics history</h1>
              </div>
            </Col>
            <Col lg="12" className="mt-4 col__form">
              <div className="form__container">
                <form
                  className="form ps-2 ps-lg-4"
                  action=""
                  method="post"
                  onSubmit={submitHandler}
                >
                  <Row className="d-flex justify-align-center justify-content-start gap-lg-5 gap-4 ps-0 ps-lg-3">
                    <Col lg="12">
                      <Col
                        lg="6"
                        md="8"
                        sm="10"
                        xs="12"
                        className="pe-0 pe-lg-3"
                      >
                        <div className="form__group d-flex justify-content-between align-items-center flex-row gap-2">
                          <label className="form__label" htmlFor="gravidity">
                            Gravidity
                          </label>
                          <input
                            className="form__input w-75"
                            type="text"
                            placeholder="Enter your gravidity"
                            id="gravidity"
                            value={gravidity}
                            onChange={(e) => setGravidity(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col
                        lg="6"
                        md="8"
                        sm="10"
                        xs="12"
                        className="pe-0 pe-lg-3"
                      >
                        <div className="form__group d-flex justify-content-between align-items-center flex-row gap-2">
                          <label className="form__label" htmlFor="parity">
                            Parity
                          </label>
                          <input
                            className="form__input w-75"
                            type="text"
                            placeholder="Enter your parity"
                            id="parity"
                            value={parity}
                            onChange={(e) => setParity(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col
                        lg="6"
                        md="8"
                        sm="10"
                        xs="12"
                        className="pe-0 pe-lg-3"
                      >
                        <div className="form__group d-flex justify-content-between align-items-center flex-row gap-2">
                          <label className="form__label" htmlFor="abortion">
                            Abortion
                          </label>
                          <input
                            className="form__input w-75"
                            type="text"
                            placeholder="Enter your abortion"
                            id="abortion"
                            value={abortion}
                            onChange={(e) => setAbortion(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col lg="6" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label mb-2" htmlFor="notes">
                            Notes
                          </label>
                          <textarea
                            className="form__input w-75"
                            placeholder="Enter your notes"
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            style={{
                              minHeight: "150px",
                              maxHeight: "150px",
                              resize: "none",
                            }}
                          ></textarea>
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

export default ObstetricsHistory;
