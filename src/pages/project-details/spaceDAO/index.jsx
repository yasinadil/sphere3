import React from "react";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import ProjectDetailsHeader from "../../../components/Project-details-header";
import ProjectDetailsIntroduction from "../../../components/Project-details-introduction";
import ProjectDetailsImages from "../../../components/Project-details-images";
import ProjectDetailsDescription from "../../../components/Project-details-description";
import ProjectDetailsVideo from "../../../components/Project-details-video";
import NextProject from "../../../components/Next-project";
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
        title={"Space Marketpace"}
        projImg={"dotMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "DAOs are often faced with a sustainability problem.  NFT membership tokens present a one-time investment in a cause without future revenue.  New mints dilute the supply.  Members expect returns on their investment but are not incentivized to contribute.  NFT royalties can be bypassed, and their revenue is often insufficient to support the needs of a DAO."
        }
        projURL={"https://space-marketplace.vercel.app"}
        client={"Space Marketplace"}
        date={"June 23, 2023"}
        category={"Blockchain"}
        tags={["NFT Marketplace", "DAO", "Ethereum"]}
      />
      <ProjectDetailsImages
        projURL={"https://space-marketplace.vercel.app"}
        projImg={"spaceMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "Space Marketplace will be a proof of concept to demonstrate the coordination mechanism value of subscription fees set according to best offers.  Space Marketplace will launch under centralized control of the contract owner with a long term plan to enable the creation of fully decentralized structures for DAOs"
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
