import React, { Fragment } from "react";

const Helmet = ({ title, children }) => {
  document.title = title
    ? `وحدة أورام النساء - ${title}`
    : "وحدة أورام النساء بطب المنصورة";

  return <Fragment>{children}</Fragment>;
};

export default Helmet;
