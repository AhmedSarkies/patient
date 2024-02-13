import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import {
  Login,
  Home,
  Patient,
  PersonalInformation,
  GeneralExamination,
  GynecologicalHistory,
  ObstetricsHistory,
  CervicalCancer,
  BreastCancer,
  OvarianCancer,
  UterineCancer,
  Osteoporosis,
  PreEclampsia,
} from "../pages";

const Routers = () => {
  const { pathname } = useLocation();

  const items = [
    {
      path: "",
      element: <PersonalInformation />,
    },
    {
      path: "personal-information",
      element: <PersonalInformation />,
    },
    {
      path: "general-examination",
      element: <GeneralExamination />,
    },
    {
      path: "gynecological-history",
      element: <GynecologicalHistory />,
    },
    {
      path: "obstetrics-history",
      element: <ObstetricsHistory />,
    },
    {
      path: "cervical-cancer",
      element: <CervicalCancer />,
    },
    {
      path: "breast-cancer",
      element: <BreastCancer />,
    },
    {
      path: "ovarian-cancer",
      element: <OvarianCancer />,
    },
    {
      path: "uterine-cancer",
      element: <UterineCancer />,
    },
    {
      path: "osteoporosis",
      element: <Osteoporosis />,
    },
    {
      path: "pre-eclampsia",
      element: <PreEclampsia />,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/patient" element={<Patient />}>
        {items.map((item) => {
          return item.path === "" ? (
            <Route
              exact
              key={item.path}
              path=""
              element={<Navigate to="personal-information" />}
            />
          ) : (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Routers;
