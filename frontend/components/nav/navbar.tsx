import NavBarStyles from "./navbar.module.css";
import logo from "../../public/images/logo/profile.png";
import logoWh from "../../public/images/logo/white.png";
import NavbarUser from "./navbarUser";
import NavbarItems from "./navbarItems";
import { Grid } from "@nextui-org/react";
import Image from "next/image";
const Navbar = ({ transparentBg, hostLogo }: any) => {
  return (
    <nav
      className={
        transparentBg
          ? NavBarStyles.navigationTransparent
          : NavBarStyles.navigation
      }
    >
      <Grid.Container
        alignItems="center"
        justify="center"
        css={transparentBg ? { padding: "24px 8px" } : {padding: 0}}
      >
        <Grid xs={3} md={3}>
          <div className={transparentBg ? NavBarStyles.hostLogoContainer: NavBarStyles.logo}>
            {transparentBg && hostLogo ? (
              <img
                className={NavBarStyles.hostLogo}
                src={transparentBg ? hostLogo : logo}
                alt="Ngaged work"
              />
            ) : (
              <Image
                src={transparentBg ? hostLogo : logo}
                alt="Ngaged work"
              />
            )}
          </div>
        </Grid>
        <Grid xs={0} md={3}>
          <NavbarItems />
        </Grid>
        <Grid xs={9} md={6}>
          {!transparentBg ? <NavbarUser /> : null}
        </Grid>
      </Grid.Container>
    </nav>
  );
};
export default Navbar;
