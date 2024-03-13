import React from "react";import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Helmet } from "../components";
import logo from "../assets/images/image-01.png";
import "../styles/login.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Send data to API
    console.log(data);
    reset();
  };

  return (
    <Helmet title="تسجيل دخول">
      <section className="login">
        <Container>
          <Row>
            <Col xxl="12" className="text-center mt-3 mb-2">
              <h1 className="login__title">
                Welcome to <br />
                <span className="login__title-highlight">
                  Gynecological Oncology Unit
                </span>
                <br />
                Mansoura University Medicine
              </h1>
            </Col>
            <Col
              xxl="4"
              xl="5"
              lg="6"
              md="8"
              sm="10"
              xs="12"
              className="m-auto text-center mb-3"
            >
              <form
                className="form login__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form__header">
                  <img src={logo} alt="logo" className="logo" />
                  <h2 className="form__title">Login Account</h2>
                </div>
                <div className="form__group">
                  <label htmlFor="name">Enter Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    className="form__input"
                    required
                    {...register("name")}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="form__group mt-3">
                  <label htmlFor="password">Enter Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    id="password"
                    className="form__input"
                    required
                    {...register("password")}
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="form__group reset__group mb-4 align-items-start">
                  <span className="reset__password">
                    Forget Password? <Link to="/forgot-password">Reset</Link>
                  </span>
                </div>
                <button type="submit" className="login__btn">
                  Login
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
