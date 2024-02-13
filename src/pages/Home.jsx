import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

import { Helmet } from "../components";

import logo from "../assets/images/logo-transparent.png";

import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="">
      <section className="home">
        <Container className="d-flex flex-column justify-content-between align-items-center">
          <Row className="home__header">
            <Col lg="2" xs="4" className="d-flex justify-content-center">
              <div className="logo__container">
                <img src={logo} alt="logo" className="home__logo" />
              </div>
            </Col>
            <Col
              lg="10"
              xs="8"
              className="d-flex align-items-center justify-content-end ps-0"
            >
              <div className="home__btns w-100">
                <Link to="/login" className="add__patient">
                  <span className="d-flex justify-content-center align-items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.00708 12C7.00708 11.8011 7.0861 11.6103 7.22675 11.4697C7.3674 11.329 7.55817 11.25 7.75708 11.25H11.2501V7.75699C11.2501 7.55808 11.3291 7.36731 11.4698 7.22666C11.6104 7.08601 11.8012 7.00699 12.0001 7.00699C12.199 7.00699 12.3898 7.08601 12.5304 7.22666C12.6711 7.36731 12.7501 7.55808 12.7501 7.75699V11.25H16.2431C16.442 11.25 16.6328 11.329 16.7734 11.4697C16.9141 11.6103 16.9931 11.8011 16.9931 12C16.9931 12.1989 16.9141 12.3897 16.7734 12.5303C16.6328 12.671 16.442 12.75 16.2431 12.75H12.7501V16.243C12.7501 16.4419 12.6711 16.6327 12.5304 16.7733C12.3898 16.914 12.199 16.993 12.0001 16.993C11.8012 16.993 11.6104 16.914 11.4698 16.7733C11.3291 16.6327 11.2501 16.4419 11.2501 16.243V12.75H7.75708C7.55817 12.75 7.3674 12.671 7.22675 12.5303C7.0861 12.3897 7.00708 12.1989 7.00708 12Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.31709 3.769C10.4296 3.42396 13.5706 3.42396 16.6831 3.769C18.5101 3.973 19.9851 5.412 20.1991 7.249C20.5691 10.406 20.5691 13.595 20.1991 16.752C19.9841 18.589 18.5091 20.027 16.6831 20.232C13.5706 20.5771 10.4296 20.5771 7.31709 20.232C5.49009 20.027 4.01509 18.589 3.80109 16.752C3.43186 13.5951 3.43186 10.4059 3.80109 7.249C4.01509 5.412 5.49109 3.973 7.31709 3.769ZM16.5171 5.259C13.5149 4.92624 10.4852 4.92624 7.48309 5.259C6.92733 5.32066 6.40859 5.56788 6.01066 5.96072C5.61274 6.35356 5.35888 6.86909 5.29009 7.424C4.93443 10.465 4.93443 13.537 5.29009 16.578C5.35909 17.1327 5.61304 17.648 6.01095 18.0407C6.40885 18.4333 6.92748 18.6804 7.48309 18.742C10.4601 19.074 13.5401 19.074 16.5171 18.742C17.0725 18.6802 17.5909 18.433 17.9886 18.0404C18.3863 17.6478 18.6401 17.1326 18.7091 16.578C19.0647 13.537 19.0647 10.465 18.7091 7.424C18.6399 6.8696 18.386 6.35465 17.9883 5.96223C17.5906 5.5698 17.0724 5.32278 16.5171 5.261V5.259Z"
                      />
                    </svg>
                  </span>
                  Add Patient
                </Link>
                <Link to="/login" className="home__login">
                  Login
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="home__content__container w-100">
            <Col xs="12">
              <div className="home__content text-center text-white">
                <h1 className="home__title">Search for patient</h1>
                <p className="home__text">
                  Search for a patient by name, email, or phone number, identify
                </p>
              </div>
            </Col>
            <Col xs="12">
              <div className="home__search text-center">
                <form className="search__form" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search for a patient"
                    className="home__search__input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="search__btn"
                    onClick={() => navigate("/patient/personal-information")}
                  >
                    <svg
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.0549 26.0811L14.9256 16.9518C14.2011 17.5314 13.3679 17.9903 12.426 18.3284C11.4841 18.6666 10.4818 18.8356 9.4191 18.8356C6.78658 18.8356 4.55884 17.9237 2.73588 16.0997C0.912928 14.2758 0.000966061 12.0481 0 9.41653C0 6.78402 0.911962 4.55628 2.73588 2.73332C4.55981 0.910364 6.78754 -0.00159742 9.4191 -0.00256348C12.0516 -0.00256348 14.2793 0.909398 16.1023 2.73332C17.9253 4.55724 18.8372 6.78498 18.8382 9.41653C18.8382 10.4792 18.6691 11.4815 18.331 12.4234C17.9929 13.3653 17.534 14.1985 16.9544 14.9231L26.0836 24.0524L24.0549 26.0811ZM9.4191 15.9374C11.2305 15.9374 12.7704 15.3032 14.0388 14.0348C15.3072 12.7663 15.941 11.2269 15.94 9.41653C15.94 7.60517 15.3058 6.06527 14.0374 4.79683C12.7689 3.52839 11.2295 2.89465 9.4191 2.89562C7.60773 2.89562 6.06783 3.52984 4.79939 4.79828C3.53095 6.06672 2.89722 7.60613 2.89818 9.41653C2.89818 11.2279 3.5324 12.7678 4.80084 14.0362C6.06928 15.3047 7.6087 15.9384 9.4191 15.9374Z"
                        fill="#f4f4f4"
                      />
                    </svg>
                  </button>
                  <br />
                  <button
                    type="submit"
                    className="home__search__btn search__btn mt-4"
                    onClick={() => navigate("/patient/personal-information")}
                  >
                    Search By Code
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
