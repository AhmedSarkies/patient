import React from "react";
const InputError = ({ error }) => {
  return <>{error && <p className="error__message">{error.message}</p>}</>;
};

export default InputError;
