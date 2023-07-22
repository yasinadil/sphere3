import React from "react";
import Split from "../Split";
import Link from "next/link";
import Image from "next/image";
import blockchain from "../../../public/img/blockchain.png";
import monitor from "../../../public/img/monitor.png";
import saas from "../../../public/img/saas.png";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">
              Best Of <br /> Our Features
            </h4>
            <Link href="/about">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <Image src={monitor} alt="web3" />
            <h6>Web Development</h6>
            <p>
              We specialize in custom-coded websites, and wordpress websites.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <Image src={blockchain} alt="web3" />
            <h6>Blockchain</h6>
            <p>
              We provide a range of Web3 / Blockchain services, and
              decentralized apps.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <Image src={saas} alt="web3" />
            <h6>SaaS products</h6>
            <p>We build rock-solid foundation that will scale your SaaS.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
