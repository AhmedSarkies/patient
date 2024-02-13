import React from "react";

import "./personal-information-component.css";

const PersonalInformationComponent = ({ logout }) => {
  return (
    <div className="personal__information-info d-flex justify-content-end align-items-center gap-2 gap-sm-3 pe-md-3 pe-3 pt-4">
      <h3 className="personal__information-name">Doctor’s name</h3>
      <img
        className="personal__information-img"
        src="https://via.placeholder.com/45"
        alt="profile"
      />
      {logout && <button className="logout__btn">Log Out</button>}
    </div>
  );
};

export default PersonalInformationComponent;
