import React from "react";

const FirstSection = (props) => {
  return (
    <>
      <div className="jumbotron bg-image">
        <div className="jumbotronsetting container-fluid text-center">
          <h1 className="mb-3">
            {props.title}
          </h1>
          <p>{props.description}</p>
          <a class="btn btn-secondary mb-5" href={props.link} role="button">
            {props.btntitle}
          </a>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
