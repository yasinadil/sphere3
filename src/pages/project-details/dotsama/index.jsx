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
        title={"Dotsama NFT Marketplace"}
        projImg={"dotMonitor.png"}
      />
      <ProjectDetailsIntroduction
        introduction={
          "NFT Marketplace on Astar and Moonbeam which makes use of EIP712 signatures."
        }
        projURL={"https://dotsama-nft-marketplace.vercel.app"}
        client={"DotsamaNFT.com"}
        date={"Ongoing"}
        category={"Blockchain"}
        tags={["NFT Marketplace", "EIP712", "Astar", "Moonbeam"]}
      />
      <ProjectDetailsImages
        projURL={"https://dotsama-nft-marketplace.vercel.app"}
        projImg={"dotMonitor.png"}
      />
      <ProjectDetailsDescription
        description={
          "The NFT marketplace follows the latest technologies in the space. It makes use of EIP712 signatures for listing, bidding and making offers to another user. The NFT marketplace is made available on Astar and Moonbeam Blockchains. The next planned release will be on Astar Substrate using WASM."
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
