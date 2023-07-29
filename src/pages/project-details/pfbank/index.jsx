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
        title={"PfBank"}
        projImg={"pfbankMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees."
        }
        projURL={"https://harmonious-praline-a36076.netlify.app"}
        client={"PfBank"}
        date={"Feb 6, 2023"}
        category={"Web Development"}
        tags={["Reactjs", "Tailwind CSS"]}
      />
      <ProjectDetailsImages
        projURL={"https://harmonious-praline-a36076.netlify.app"}
        projImg={"pfbankMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
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
