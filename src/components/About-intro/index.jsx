import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We specialize in top-notch web development and cutting-edge
                  blockchain services. Our mission is to empower businesses and
                  individuals with transformative digital solutions that
                  revolutionize their online presence. We implement
                  industry-leading security protocols and best practices to
                  ensure the integrity, confidentiality, and immutability of
                  your blockchain solutions.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
