import React, { Fragment, useState } from "react";

import { Col, Container, Row } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

import "../styles/uterine-cancer.css";

const UterineCancer = () => {
  const [lynchSyndrome, setLynchSyndrome] = useState("");
  const [irregularBleeding, setIrregularBleeding] = useState("");
  const [resultPerimetrium, setResultPerimetrium] = useState("");
  const [commentsPerimetrium, setCommentsPerimetrium] = useState("");
  const [resultMayometrium, setResultMayometrium] = useState("");
  const [commentsMayometrium, setCommentsMayometrium] = useState("");
  const [endometrium, setEndometrium] = useState("");
  const [resultBiopsy, setResultBiopsy] = useState("");
  const [commentsBiopsy, setCommentsBiopsy] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setLynchSyndrome("");
    setIrregularBleeding("");
    setResultPerimetrium("");
    setCommentsPerimetrium("");
    setResultMayometrium("");
    setCommentsMayometrium("");
    setEndometrium("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Uterine Cancer">
      <section className="uterine__cancer">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Uterine Cancer</h1>
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
                  <Row className="d-flex justify-align-center justify-content-start">
                    <Col xl="5" className="pe-3 pe-lg-5">
                      <Col md="12" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label">Lynch Syndrome</label>
                          <div className="form__radio-group form__radio-group-ovarian-cancer">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your lynch syndrome"
                                id="yes-lynch-syndrome"
                                name="lynch-syndrome"
                                value={lynchSyndrome}
                                onChange={(e) => setLynchSyndrome(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-lynch-syndrome"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your lynch syndrome"
                                id="no-lynch-syndrome"
                                name="lynch-syndrome"
                                value={lynchSyndrome}
                                onChange={(e) => setLynchSyndrome(false)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-lynch-syndrome"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="12" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label">
                            Irregular bleeding
                          </label>
                          <div className="form__radio-group form__radio-group-ovarian-cancer">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your irregular bleeding"
                                id="yes-irregular-bleeding"
                                name="irregular-bleeding"
                                value={irregularBleeding}
                                onChange={(e) => setIrregularBleeding(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-irregular-bleeding"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your irregular bleeding"
                                id="no-irregular-bleeding"
                                name="irregular-bleeding"
                                value={irregularBleeding}
                                onChange={(e) => setIrregularBleeding(false)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-irregular-bleeding"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Col>
                    <Col xl="7">
                      <Col lg="11" md="12" className="table__container mt-5 mt-xl-3 mb-5 mb-xl-0">
                        <Col lg="12" className="table__content mt-3 mb-5">
                          <table className="table">
                            <thead>
                              <tr>
                                <th className="border-0" colSpan="2"></th>
                                <th className="cell__header cell__header-uterine__cancer">
                                  <span>Result</span>
                                </th>
                                <th className="cell__header cell__header-uterine__cancer">
                                  <span>Comments</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  className="cell__header__mean cell__header cell__header-uterine__cancer"
                                  rowSpan="3"
                                >
                                  <span>TVS</span>
                                </td>
                                <td className="cell__header cell__header-uterine__cancer">
                                  <span>Perimetrium</span>
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="result-Perimetrium"
                                    value={resultPerimetrium}
                                    onChange={(e) =>
                                      setResultPerimetrium(e.target.value)
                                    }
                                  />
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="comments-perimetrium"
                                    value={commentsPerimetrium}
                                    onChange={(e) =>
                                      setCommentsPerimetrium(e.target.value)
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="cell__header cell__header-uterine__cancer">
                                  <span>Mayometrium</span>
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="result-mayometrium"
                                    value={resultMayometrium}
                                    onChange={(e) =>
                                      setResultMayometrium(e.target.value)
                                    }
                                  />
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="comments-mayometrium"
                                    value={commentsMayometrium}
                                    onChange={(e) =>
                                      setCommentsMayometrium(e.target.value)
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="cell__header cell__header-uterine__cancer">
                                  <span>Endometrium</span>
                                </td>
                                <td className="cell__input" colSpan="2">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="endometrium"
                                    value={endometrium}
                                    onChange={(e) =>
                                      setEndometrium(e.target.value)
                                    }
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Col>
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
                                  <span>Biopsy</span>
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="result-biopsy"
                                    value={resultBiopsy}
                                    onChange={(e) =>
                                      setResultBiopsy(e.target.value)
                                    }
                                  />
                                </td>
                                <td className="cell__input">
                                  <input
                                    className="form__input table__input"
                                    type="text"
                                    id="comments-biopsy"
                                    value={commentsBiopsy}
                                    onChange={(e) =>
                                      setCommentsBiopsy(e.target.value)
                                    }
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Col>
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

export default UterineCancer;
