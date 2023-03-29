import React from "react";
import image from "./default_image.png";

export const ArticlesLoader = () => {
  return (
    <div className="container-fluid g-0 pb-5 mb-5">
      <div className="row">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="col-12 col-xl-6 col-xxl-4 mb-4">
            <div className="card" aria-hidden="true">
              <img
                height="250px"
                alt="default"
                src={image}
                className="card-img-top"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
