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
        title={"Stealth Meta Wear"}
        projURL={"https://www.stealthmetawear.com"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "Stealth Meta Wear is an innovative project that merges the realms of digital fashion and NFT (Non-Fungible Token) art. It aims to create a unique and cutting-edge collection of digital fashion items that are tokenized as NFTs on the blockchain."
        }
        client={"Stealth Meta Wear"}
        date={"May 20, 2023"}
        category={"Blockchain"}
        tags={["NFT", "Minting", "Ethereum", "Digital Clothing"]}
      />
      <ProjectDetailsImages
        projURL={"https://www.stealthmetawear.com"}
        projImg={"metawearMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "As a pioneering project at the intersection of digital fashion and NFT art, Stealth Meta Wear aims to push the boundaries of what is possible in the world of fashion and digital ownership. It seeks to redefine the concept of fashion by combining digital design, virtual ownership, and cutting-edge technologies, offering a unique and forward-thinking experience for fashion enthusiasts and collectors alike."
        }
      />

      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
