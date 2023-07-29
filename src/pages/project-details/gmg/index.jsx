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
        title={"GMG Media Agency"}
        projImg={"gmgMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "GMG Media Agency's journey unfolds as it harnesses the versatility of WordPress, Elementor Pro, and the Astra theme to craft a dynamic and immersive online presence for its media services."
        }
        projURL={"https://gsumediagroup.com"}
        client={"GMG Media Agency"}
        date={"Nov 11, 2022"}
        category={"Web Development"}
        tags={["Wordpress", "Elementor Pro", "Astra Theme"]}
      />
      <ProjectDetailsImages
        projURL={"https://gsumediagroup.com"}
        projImg={"gmgMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "Discover how GMG Media Agency embraces the potential of WordPress, utilizes ihe flexibility of Elementor Pro, and maximizes the performance of the Astra theme to build a captivating website that showcases its media services. Witness the seamless integration of cutting-edge design tools that elevate GMG's digital offerings providing clients wih an engaging and Impactful experience in the world of media."
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
