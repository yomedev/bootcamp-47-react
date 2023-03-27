import React from "react";
import { Button } from "../../../Button";

export const Nav = () => {
  return (
    <>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-light">
        Home
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Profile
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Messages
      </a>
      <a href="/" style={{ textAlign: "left" }} className="btn btn-link">
        Settings
      </a>

      <Button className="btn-danger mt-auto">Log out</Button>
    </>
  );
};
