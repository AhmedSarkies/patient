import React, { Fragment, useState } from "react";

import { Col, Container, Row } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

import "../styles/ovarian-cancer.css";

const OvarianCancer = () => {
  const [histBreastCancer, setHistBreastCancer] = useState("");
  const [relativeOvarianCancer, setRelativeOvarianCancer] = useState("");
  const [brca1OrBrca2GeneMutation, setBrca1OrBrca2GeneMutation] = useState("");
  const [resultTvs, setResultTvs] = useState("");
  const [commentsTvs, setCommentsTvs] = useState("");
  const [resultCa125, setResultCa125] = useState("");
  const [commentsCa125, setCommentsCa125] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [investigation, setInvestigation] = useState("");

  const reset = () => {
    setHistBreastCancer("");
    setRelativeOvarianCancer("");
    setBrca1OrBrca2GeneMutation("");
    setResultTvs("");
    setCommentsTvs("");
    setResultCa125("");
    setCommentsCa125("");
    setRecommendations("");
    setInvestigation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    reset();
  };

  return (
    <Helmet title="Ovarian Cancer">
      <section className="ovarian__cancer">
        <Container style={{ maxWidth: "100%" }}>
          <Row style={{ paddingBottom: "2.5rem" }}>
            <Col lg="12" className="pe-0 pe-sm-3 pe-xs-4">
              <PersonalInformationComponent logout={true} />
            </Col>
            <Col lg="12" className="mt-3 mb-2">
              <div className="page__title">
                <h1 className="">Ovarian Cancer</h1>
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
                    <Col lg="5" className="pe-3 pe-lg-5">
                      <Col md="12" className="pe-0 pe-lg-3">
                        <div className="form__group">
                          <label className="form__label">
                            Do you have a personal history of breast cancer?
                          </label>
                          <div className="form__radio-group form__radio-group-ovarian-cancer">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your history of breast cancer"
                                id="yes-hist-breast-cancer"
                                name="hist-breast-cancer"
                                value={histBreastCancer}
                                onChange={(e) => setHistBreastCancer(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-hist-breast-cancer"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your history of breast cancer"
                                id="no-hist-breast-cancer"
                                name="hist-breast-cancer"
                                value={histBreastCancer}
                                onChange={(e) => setHistBreastCancer(false)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-hist-breast-cancer"
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
                            Do you have one or more relatives with ovarian
                            cancer?
                          </label>
                          <div className="form__radio-group form__radio-group-ovarian-cancer">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your relative with ovarian cancer"
                                id="yes-relative-ovarian-cancer"
                                name="relative-ovarian-cancer"
                                value={relativeOvarianCancer}
                                onChange={(e) => relativeOvarianCancer(true)}
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-relative-ovarian-cancer"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your relative with ovarian cancer"
                                id="no-relative-ovarian-cancer"
                                name="relative-ovarian-cancer"
                                value={relativeOvarianCancer}
                                onChange={(e) =>
                                  setRelativeOvarianCancer(false)
                                }
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-relative-ovarian-cancer"
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
                            Do you have the BRCA1 or BRCA2 gene mutation or
                            Lynch syndrome - hereditary nonpolyposis colorectal
                            cancer (HNPCC)?
                          </label>
                          <div className="form__radio-group form__radio-group-ovarian-cancer">
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your BRCA1 or BRCA2 gene mutation or Lynch syndrome - hereditary nonpolyposis colorectal cancer (HNPCC)"
                                id="yes-BRCA1-or-BRCA2-gene-mutation"
                                name="BRCA1-or-BRCA2-gene-mutation"
                                value={brca1OrBrca2GeneMutation}
                                onChange={(e) =>
                                  setBrca1OrBrca2GeneMutation(true)
                                }
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="yes-BRCA1-or-BRCA2-gene-mutation"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your BRCA1 or BRCA2 gene mutation or Lynch syndrome - hereditary nonpolyposis colorectal cancer (HNPCC)"
                                id="no-BRCA1-or-BRCA2-gene-mutation"
                                name="BRCA1-or-BRCA2-gene-mutation"
                                value={brca1OrBrca2GeneMutation}
                                onChange={(e) =>
                                  setBrca1OrBrca2GeneMutation(false)
                                }
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-BRCA1-or-BRCA2-gene-mutation"
                              >
                                No
                              </label>
                            </div>
                            <div className="form__radio d-flex justify-content-start align-items-center gap-2">
                              <input
                                className="form__input"
                                type="radio"
                                placeholder="Enter your BRCA1 or BRCA2 gene mutation or Lynch syndrome - hereditary nonpolyposis colorectal cancer (HNPCC)"
                                id="no-dont-know-BRCA1-or-BRCA2-gene-mutation"
                                name="BRCA1-or-BRCA2-gene-mutation"
                                value={brca1OrBrca2GeneMutation}
                                onChange={(e) =>
                                  setBrca1OrBrca2GeneMutation(null)
                                }
                              />
                              <label
                                className="form__radio-label"
                                htmlFor="no-dont-know-BRCA1-or-BRCA2-gene-mutation"
                                style={{ width: "max-content" }}
                              >
                                Don’t know
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Col>
                    <Col lg="7">
                      <Row className="d-flex justify-content-start align-items-start gap-5">
                        <Col lg="11" md="12" className="table__container mt-3">
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
                                    <span>TVS</span>
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="result-tvs"
                                      value={resultTvs}
                                      onChange={(e) =>
                                        setResultTvs(e.target.value)
                                      }
                                    />
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="comments-tvs"
                                      value={commentsTvs}
                                      onChange={(e) =>
                                        setCommentsTvs(e.target.value)
                                      }
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="cell__header__mean cell__header">
                                    <span>CA-125</span>
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="result-ca-125"
                                      value={resultCa125}
                                      onChange={(e) =>
                                        setResultCa125(e.target.value)
                                      }
                                    />
                                  </td>
                                  <td className="cell__input">
                                    <input
                                      className="form__input table__input"
                                      type="text"
                                      id="comments-ca-125"
                                      value={commentsCa125}
                                      onChange={(e) =>
                                        setCommentsCa125(e.target.value)
                                      }
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Col>
                        </Col>
                        <Col lg="7" md="12">
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
                                minHeight: "220px",
                                maxHeight: "220px",
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

export default OvarianCancer;
