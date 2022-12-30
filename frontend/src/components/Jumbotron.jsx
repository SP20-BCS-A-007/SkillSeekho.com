import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron bg-image">
        <div className="jumbotronsetting container-fluid">
          <h4 className="mb-3">Start Learning New Skills</h4>
          <h1 className="mb-3">
            Start Learning New Skills From Our Experienced And Expert Team
          </h1>
          <p>Discover you passion and how to level up with our skills guide</p>
          <a class="btn btn-secondary mb-5" href="#courses" role="button">Lets Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
