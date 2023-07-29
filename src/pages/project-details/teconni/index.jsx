import React from "react";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import ProjectDetailsHeader from "../../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../../components/Project-details-introduction";
import ProjectDetailsImages from "../../../components/Project-details-images";
import ProjectDetailsDescription from "../../../components/Project-details-description";
import SmallFooter from "../../../components/Small-footer";

const ProjectDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetailsHeader
        category={"Web Development"}
        title={"Teconni"}
        projImg={"teconniMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "Teconni is a wristwatch design company that embraces the power of WordPress, Elementor Pro, and the Astra theme to create an exceptional online presence for their timepieces."
        }
        projURL={"https://teconni.net"}
        client={"Teconni"}
        date={"Feb 6, 2023"}
        category={"Web Development"}
        tags={["Wordpress", "Elementor Pro", "Astra Theme"]}
      />
      <ProjectDetailsImages
        projURL={"https://teconni.net"}
        projImg={"teconniMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "Discover how Teconni's exquisite wristwatch designs come to life with a captivating website built on WordPress, powered by Elementor Pro, and enhanced by the Astra theme. Explore the seamless integration of modern design tools that showcase the artistry and craftsmanship behind Teconni's timepieces, providing a delightful experience for watch enthusiasts."
        }
      />
      {/* <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/bg.jpg"
        videoType="vimeo"
        videoId={127203262}
      /> */}
      {/* <NextProject
        projectImage="/img/portfolio/project2/bg.jpg"
        projectTitle="Inspiring new space."
      /> */}
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
