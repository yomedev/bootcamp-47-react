import React from "react";

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" style={{height: 50, width: 50}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
