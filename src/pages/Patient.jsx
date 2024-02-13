import React from "react";

import { Outlet } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

import { Helmet, Navbar } from "../components";

import "../styles/patient.css";

const Patient = () => {
  return (
    <Helmet title="">
      <section className="patient">
        <Container
          style={{
            maxWidth: "100%",
            paddingLeft: "0px",
          }}
        >
          <Row className="position-relative pe-0">
            <Col xl="3">
              <Navbar />
            </Col>
            <Col xl="9" className="pe-0">
              <div className="patient__content">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Patient;
