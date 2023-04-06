import React from "react";
import { useDispatch } from "react-redux";

export const MiddlewarePage = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary my-4"
      onClick={() => dispatch({ type: "test" })}
    >
      Get articles
    </button>
  );
};
