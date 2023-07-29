import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = (props) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">{props.introduction}</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href={props.projURL} rel="noreferrer" target="_blank">
                  {props.client}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{props.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {/* <Link href="/works/works-dark">Web Design </Link> , */}
                <Link href="/works">{props.category}</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {props.tags.map((tag, index) => {
                  return (
                    <div key={index}>
                      <Link href="/works">{tag}</Link>
                      {props.tags.length > 1 && ","}
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
