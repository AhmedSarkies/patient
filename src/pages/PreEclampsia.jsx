import React, { Fragment, useState } from "react";

import { Container, Col, Row } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

const PreEclampsia = () => {
  const [historyOfPreEclampsia, setHistoryOfPreEclampsia] = useState(false);
  const [numberPregnanciesWithPE, setNumberPregnanciesWithPE] = useState("");
  const [dateOfPregnanciesWithPE, setDateOfPregnanciesWithPE] = useState("");
  const [fateOfThePregnancy, setFateOfThePregnancy] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setHistoryOfPreEclampsia(false);
    setNumberPregnanciesWithPE("");
    setDateOfPregnanciesWithPE("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Pre-Eclampsia">
      <section className="pre-eclampsia">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Pre Eclampsia</h1>
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
                  <Row className="d-flex justify-align-center justify-content-start gap-4 ps-0 ps-lg-3">
                    <Col lg="12">
                      <Col lg="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label">
                            History of pre-eclampsia
                          </label>
                          <div className="form__radio-group">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your history of pre-eclampsia"
                                id="yes-history-of-pre-eclampsia"
                                name="historyOfPreEclampsia"
                                value={historyOfPreEclampsia}
                                onChange={() => setHistoryOfPreEclampsia(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-history-of-pre-eclampsia"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your history of pre-eclampsia"
                                id="no-history-of-pre-eclampsia"
                                name="historyOfPreEclampsia"
                                value={historyOfPreEclampsia}
                                onChange={() => setHistoryOfPreEclampsia(false)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-history-of-pre-eclampsia"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col lg="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label
                            className="form__label"
                            htmlFor="numberPregnanciesWithPE"
                          >
                            Number of pregnancies with PE
                          </label>
                          <input
                            className="form__input"
                            type="text"
                            placeholder="Number of pregnancies with PE"
                            id="numberPregnanciesWithPE"
                            value={numberPregnanciesWithPE}
                            onChange={(e) =>
                              setNumberPregnanciesWithPE(e.target.value)
                            }
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12">
                      <Col lg="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label
                            className="form__label"
                            htmlFor="dateOfPregnanciesWithPE"
                          >
                            Date of pregnancies with PE
                          </label>
                          <input
                            className="form__input"
                            type="text"
                            placeholder="Date of pregnancies with PE"
                            id="dateOfPregnanciesWithPE"
                            value={dateOfPregnanciesWithPE}
                            onChange={(e) =>
                              setDateOfPregnanciesWithPE(e.target.value)
                            }
                          />
                        </div>
                      </Col>
                    </Col>
                    <Col lg="4" className="me-5">
                      <div className="form__group">
                        <label
                          className="form__label"
                          htmlFor="fateOfThePregnancy"
                        >
                          Fate of the pregnancy
                        </label>
                        <select
                          className="form__input"
                          id="fateOfThePregnancy"
                          value={fateOfThePregnancy}
                          onChange={(e) =>
                            setFateOfThePregnancy(e.target.value)
                          }
                        >
                          <option
                            className="form__option"
                            value=""
                            defaultValue
                            disabled
                            style={{ display: "none" }}
                          >
                            Choose Fate
                          </option>
                          <option value="1child">1 Child</option>
                          <option value=">1child">{"> 1 Child"}</option>
                          <option value="stillBirth">Still birth</option>
                        </select>
                      </div>
                    </Col>
                    {/* ====== */}
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
                      className="col__submit d-flex justify-content-end align-items-center mt-4"
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

export default PreEclampsia;
