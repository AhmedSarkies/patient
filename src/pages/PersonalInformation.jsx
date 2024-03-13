import React from "react";import { Container, Row, Col } from "reactstrap";

import { Helmet, PersonalInformationComponent } from "../components";

import "../styles/personal-information.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import InputError from "../components/InputError/InputError";

const schema = z.object({
  name: z.string().min(3, {
    message: "name is required and must be more than three characters",
  }),
  id: z.string().min(1, {
    message: "id is required",
  }),
  code: z.string(),
  birth: z.string().min(1, {
    message: "id is required",
  }),
  age: z.string().min(1, {
    message: "age is required",
  }),
  status: z.string().min(1, {
    message: "status is required",
  }),
  address: z.string(),
  phone: z
    .string()
    .min(1, {
      message: "phone is required",
    })
    .max(11),
  email: z.string().email({
    message: "email is required",
  }),
  homeNumber: z.string(),
  relativeName: z.string(),
});

const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      schema.parse(data);
      console.log(data);
      reset();
    } catch (error) {
      console.error(error.errors);
    }
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
                  onSubmit={handleSubmit(onSubmit)}
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
                            {...register("name", { required: true })}
                          />
                          <InputError error={errors.name} />
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
                          type="number"
                          placeholder="Enter your id"
                          id="id"
                          {...register("id", { required: true })}
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
                          {...register("code", { required: true })}
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
                          {...register("birth", { required: true })}
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
                          {...register("age", { required: true })}
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
                          {...register("status", { required: true })}
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
                          {...register("address", { required: true })}
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
                          {...register("phone", { required: true })}
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
                          {...register("email", { required: true })}
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
                          {...register("homeNumber", { required: true })}
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
                          {...register("relativeName", { required: true })}
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
