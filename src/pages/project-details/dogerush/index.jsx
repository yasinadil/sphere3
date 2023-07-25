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
        category={"Blockchain"}
        title={"Doge Rush Presale"}
        projURL={"https://dogerush.io"}
        projImg={"dogeRushMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={"The Ultimate meme coin revolution."}
        client={"Doge Rush"}
        date={"Juky 01, 2023"}
        category={"Blockchain"}
        tags={["Token Presale", "ERC20", "ICO", "Ethereum"]}
      />
      <ProjectDetailsImages
        projURL={"https://dogerush.io"}
        projImg={"dogeRushMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "Welcome to Doge Rush, the unstoppable force in the meme coin universe! We're smashing boundaries, fusing viral internet culture with real-world utilities. We're the first to do this. And who's leading the charge? Only the most iconic duo: Doge and Elon. Here, memes aren't just about fun; they're about strategic financial growth. We're creating an epic story, and you're invited to be part of it."
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
