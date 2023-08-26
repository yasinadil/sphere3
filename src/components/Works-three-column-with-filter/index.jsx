/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".web">Web Development</span>
              <span data-filter=".blockchain">Blockchain</span>
              {/* <span data-filter=".graphic">Creative</span> */}
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/pfbank">
                  <a>
                    <img src="/img/portfolio/port1.JPG" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>PfBank</h6>
                <span>
                  <a href="#0">Frontend</a>, <a href="#0">React JS</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/dotsama">
                  <a>
                    <img src="/img/portfolio/dot.JPG" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Dotsama NFT Marketplace</h6>
                <span>
                  <a href="#0">Blockchain</a>, <a href="#0">NFT Marketplace</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain lg-mr ">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/spaceDAO">
                  <a>
                    <img src="/img/portfolio/space.JPG" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>SpaceDAO</h6>
                <span>
                  <a href="#0">Blockchain</a>, <a href="#0">Marketplace, DAO</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/teconni">
                  <a>
                    <img src="/img/portfolio/teconni.jpeg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Teconni</h6>
                <span>
                  <a href="#0">Web Development</a>, <a href="#0">Wordpress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/gmg">
                  <a>
                    <img src="/img/portfolio/gmg.jpeg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>GMG Media Agency</h6>
                <span>
                  <a href="#0">Web Development</a>, <a href="#0">Wordpress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/dogerush">
                  <a>
                    <img src="/img/portfolio/dogerush.JPG" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>DogeRush</h6>
                <span>
                  <a href="#0">Blockchain</a>,{" "}
                  <a href="#0">Token Presale, ICO</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/motorhome">
                  <a>
                    <img src="/img/portfolio/Motorhome.jpeg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>MotorHome Iberica</h6>
                <span>
                  <a href="#0">Web Development</a>, <a href="#0">Wordpress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/metawear">
                  <a>
                    <img src="/img/portfolio/metawear.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Stealth Meta Wear</h6>
                <span>
                  <a href="#0">Blockchain</a>, <a href="#0">NFT, Minting</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <img src="/img/portfolio/scoobyspace.JPG" alt="image" />
              </div>
              <div className="cont">
                <h6>Scooby Space Presale</h6>
                <span>
                  <a href="#0">Blockchain</a>,{" "}
                  <a href="#0">Token Presale, ICO</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items blockchain">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <img src="/img/portfolio/freshume2.JPG" alt="image" />
              </div>
              <div className="cont">
                <h6>Freshume LinkedIn NFT Certificates</h6>
                <span>
                  <a href="#0">Blockchain</a>, <a href="#0">NFT, Blockchain</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
