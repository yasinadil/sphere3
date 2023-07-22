/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  // React.useEffect(() => {
  //   handleSearch();
  // }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a
            style={{
              fontSize: "1.3rem",
              padding: "20px",
            }}
          >
            {/* {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )} */}
            sphere3
          </a>
        </Link>

        <button
          style={{ paddingRight: "20px" }}
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link" role="button">
                <Link href="/">Home</Link>
              </span>
              {/* <div className="">
                <Link href="/home/home1-dark">
                  <a className="dropdown-item">Home</a>
                </Link>
              </div> */}
            </li>

            <li className="nav-item">
              <Link href="/showcase">
                <a className="">
                  <span className="nav-link" role="button">
                    Showcases
                  </span>
                </a>
              </Link>
              {/* <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Full Screen</a>
                </Link>
                <Link href="/showcase2/showcase2-dark">
                  <a className="dropdown-item">Creative Carousel</a>
                </Link>
              </div> */}
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" role="button">
                <Link href="/works">portfolio</Link>
              </span>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          {/* <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
