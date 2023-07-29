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
        title={"MotorHome Iberica"}
        projImg={"motorMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "MotorHome Iberica, a leading bus company, embarks on a digital journey with the aid of WordPress, Elementor Pro, and the Astra theme to create a compelling online presence for its bus sales and rental services"
        }
        projURL={"https://motorhomeiberica.es"}
        client={"MotorHome Iberica"}
        date={"Mar 23, 2023"}
        category={"Web Development"}
        tags={["Wordpress", "Elementor Pro", "Astra Theme"]}
      />
      <ProjectDetailsImages
        projURL={"https://motorhomeiberica.es"}
        projImg={"motorMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "Discover how MotorHome lberica harnesses the power of WordPress, leverages the flexibility of Elementor Pro, and optimizes the Astra theme to craft an engaging website that showcases its extensive fleet of buses available for sale and rent. Witness the seamless integration of modern design tools that enhance the user experience, providing customers with a convenient and informative platform to meet their transportation needs."
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
