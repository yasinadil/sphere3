import React from "react";

const ProjectDetailsHeader = (props) => {
  return (
    <section className="page-header proj-det">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{props.category}</h6>
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="img-wrapper bg-img parallaxie"
        style={{ backgroundImage: `url(/img/portfolio/${props.imgName})` }}
      ></div> */}
    </section>
  );
};

export default ProjectDetailsHeader;
