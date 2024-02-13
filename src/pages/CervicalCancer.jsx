import React, { Fragment, useState } from "react";

import { Col, Container, Row } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

import "../styles/cervical-cancer.css";

const CervicalCancer = () => {
  const [hpvVaccine, setHpvVaccine] = useState(false);
  const [resultViaTest, setResultViaTest] = useState("");
  const [commentsViaTest, setCommentsViaTest] = useState("");
  const [resultPapSmear, setResultPapSmear] = useState("");
  const [commentsPapSmear, setCommentsPapSmear] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setHpvVaccine("");
    setResultViaTest("");
    setCommentsViaTest("");
    setResultPapSmear("");
    setCommentsPapSmear("");
    setRecommendations("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Cervical Cancer">
      <section className="cervical__cancer">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Cervix Cancer</h1>
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
                    <Col lg="12">
                      <Col md="4" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label">HPV Vaccine</label>
                          <div className="form__radio-group">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your HPV Vaccine"
                                id="yes-hpv-vaccine"
                                name="hpv-vaccine"
                                value={hpvVaccine}
                                onChange={(e) => setHpvVaccine(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-hpv-vaccine"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your HPV Vaccine"
                                id="no-hpv-vaccine"
                                name="hpv-vaccine"
                                value={hpvVaccine}
                                onChange={(e) => setHpvVaccine(false)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-hpv-vaccine"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Col>
                    <Col lg="12" className="pe-3 pe-lg-5">
                      <Row className="d-flex justify-content-start align-items-start gap-5">
                        <Col lg="7" className="table__container mt-3">
                          <Col lg="12" className="table__content mt-3">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="border-0"></th>
                                  <th className="cell__header">
                                    <span>Result</span>
                                  </th>
                                  <th className="cell__header">
                                    <span>Comments</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="cell__header__mean cell__header">
                                    <span>VIA Test</span>
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="result-via-test"
                                      value={resultViaTest}
                                      onChange={(e) =>
                                        setResultViaTest(e.target.value)
                                      }
                                    />
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="comments-via-test"
                                      value={commentsViaTest}
                                      onChange={(e) =>
                                        setCommentsViaTest(e.target.value)
                                      }
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                          <Col lg="12" className="table__content">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="border-0"></th>
                                  <th className="cell__header">
                                    <span>Result</span>
                                  </th>
                                  <th className="cell__header">
                                    <span>Comments</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="cell__header__mean cell__header">
                                    <span>Pap smear</span>
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="result-pap-smear"
                                      value={resultPapSmear}
                                      onChange={(e) =>
                                        setResultPapSmear(e.target.value)
                                      }
                                    />
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="comments-pap-smear"
                                      value={commentsPapSmear}
                                      onChange={(e) =>
                                        setCommentsPapSmear(e.target.value)
                                      }
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                        </Col>
                        <Col lg="4">
                          <div className="form__group">
                            <label
                              className="form__label mb-2"
                              htmlFor="recommendations"
                            >
                              Recommendations
                            </label>
                            <textarea
                              className="form__input col-12 col-lg-12 col-md-8"
                              placeholder="Enter your recommendations"
                              id="recommendations"
                              style={{
                                minHeight: "215px",
                                maxHeight: "215px",
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

export default CervicalCancer;
