import React, { Fragment, useState } from "react";

import { Container, Col, Row } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

const Osteoporosis = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [useOfEstrogen, setUseOfEstrogen] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setAge("");
    setWeight("");
    setUseOfEstrogen("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Osteoporosis">
      <section className="osteoporosis">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Osteoporosis</h1>
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
                  <Row className="d-flex justify-align-start justify-content-start gap-5 ps-0 ps-lg-3">
                    <Col lg="12" className="pe-3 pe-lg-5">
                      <Row className="d-flex justify-content-start align-items-start">
                        <Col lg="5">
                          <Col lg="9" md="12">
                            <div className="form__group">
                              <label
                                className="form__label d-flex justify-content-between align-items-start mb-2"
                                htmlFor="age"
                              >
                                Age{" "}
                                <span
                                  className="fw-bold fs-4"
                                  style={{
                                    color: "#ff0000",
                                  }}
                                >
                                  *
                                </span>
                              </label>
                              <select
                                className="form__input"
                                id="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                              >
                                <option
                                  className="form__option"
                                  value=""
                                  defaultValue
                                  disabled
                                  style={{ display: "none" }}
                                >
                                  Choose age
                                </option>
                                <option value="<= 25">{"<= 25"}</option>
                                <option value="26-39">26-39</option>
                                <option value="40-49">40-49</option>
                                <option value="50-70">50-70</option>
                                <option value=">70">{">70"}</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg="9" md="12">
                            <div className="form__group">
                              <label
                                className="form__label mb-2"
                                htmlFor="weight"
                              >
                                Weight
                              </label>
                              <select
                                className="form__input"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                              >
                                <option
                                  className="form__option"
                                  value=""
                                  defaultValue
                                  disabled
                                  style={{ display: "none" }}
                                >
                                  Choose Weight
                                </option>
                                <option value="<60kg">{"< 60kg"}</option>
                                <option value="60-69kg">60-69 kg</option>
                                <option value=">=70">{">= 70"}</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg="9" md="12">
                            <div className="form__group">
                              <label
                                className="form__label mb-2"
                                htmlFor="useOfEstrogen"
                              >
                                Current estrogen use?
                              </label>
                              <select
                                className="form__input"
                                id="useOfEstrogen"
                                value={useOfEstrogen}
                                onChange={(e) =>
                                  setUseOfEstrogen(e.target.value)
                                }
                              >
                                <option
                                  className="form__option"
                                  value=""
                                  defaultValue
                                  disabled
                                  style={{ display: "none" }}
                                >
                                  Choose estrogen use
                                </option>
                                <option value="1child">1 Child</option>
                                <option value=">1child">{"> 1 Child"}</option>
                                <option value="stillBirth">Still birth</option>
                              </select>
                            </div>
                          </Col>
                        </Col>
                        <Col lg="4">
                          <div className="form__group">
                            <label
                              className="form__label mb-3"
                              htmlFor="recommendations"
                            >
                              Recommendations
                            </label>
                            <textarea
                              className="form__input col-12 col-lg-12 col-md-8"
                              placeholder="Enter your recommendations"
                              id="recommendations"
                              style={{
                                minHeight: "185px",
                                maxHeight: "185px",
                                resize: "none",
                              }}
                              value={recommendations}
                              onChange={(e) =>
                                setRecommendations(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </Col>
                      </Row>
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

export default Osteoporosis;
