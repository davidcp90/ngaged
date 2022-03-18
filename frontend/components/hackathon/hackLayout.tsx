import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import Navbar from "../nav/navbar";
import Image from "next/image";
import logoWh from "../../public/images/logo/white.png";
import teamWork from "../../public/images/home/team-work.gif";
import { ChevronDown } from "react-iconly";
import HackLayoutStyles from "./hackLayout.module.css";
const HackathonLayout = ({
  children,
  heroImg,
  hostLogo,
}: any) => {
  return (
    <div>
      <Grid
        xs={12}
        css={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          height: "600px",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          padding: "0",
        }}
        direction="column"
      >
        <nav className={HackLayoutStyles.hostNavbar}>
          <div className={HackLayoutStyles.hostLogoContainer}>
            <img
              className={HackLayoutStyles.hostLogo}
              src={hostLogo}
              alt="powered by Ngaged"
            />
          </div>
          <div className={HackLayoutStyles.ngagedLogoContainer}>
            <Image src={logoWh} alt="Ngaged work" />
          </div>
        </nav>
      </Grid>
      <div>{children}</div>
    </div>
  );
};
export default HackathonLayout;
