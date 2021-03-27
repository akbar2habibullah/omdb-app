import React, { useEffect } from "react";
import Router from "next/router";

const Error = () => {
  useEffect(() => {
    Router.push("/");
  });

  return <div />;
};

export default Error;
