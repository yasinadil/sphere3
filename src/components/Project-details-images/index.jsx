/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = (props) => {
  return (
    <div className="row justify-content-center">
      <div style={{ justifyContent: "center" }}>
        <a href={`${props.projURL}`} rel="noreferrer" target="_blank">
          <img
            alt=""
            src={`/img/portfolio/${props.projImg}`}
            style={{ width: "600px", height: "100%" }}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsImages;
