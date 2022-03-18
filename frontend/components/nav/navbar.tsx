import NavBarStyles from "./navbar.module.css";
import Image from "next/image";
import logo from "../../public/images/logo/profile.png";
import logoWh from "../../public/images/logo/white.png";
import NavbarUser from "./navbarUser";
import NavbarItems from "./navbarItems";
import { Grid } from "@nextui-org/react";
const Navbar = ({transparentBg}: any) => {
  return (
    <nav className={transparentBg ? NavBarStyles.navigationTransparent : NavBarStyles.navigation}>
      <Grid.Container alignItems="center" justify="center" css={{padding : 0}}>
        <Grid xs={3} md={3}>
          <div className={NavBarStyles.logo}>
            <Image src={transparentBg ? logoWh : logo} alt="Ngaged work" />
          </div>
        </Grid>
        <Grid xs={0} md={3}>
          <NavbarItems />
        </Grid>
        <Grid xs={9} md={6}>
          <NavbarUser transparentBg={transparentBg} />
        </Grid>
      </Grid.Container>
    </nav>
  );
};
export default Navbar;
