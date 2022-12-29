import React from "react";
import Button from "react-bootstrap/Button";
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
          <Button variant="secondary">Let's Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
