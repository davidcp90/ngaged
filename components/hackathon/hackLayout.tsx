import { Grid, Text, Spacer } from "@nextui-org/react";
import Link from "next/link";
import HackLayoutStyles from "./hackLayout.module.css";
const HackathonLayout = ({
  children,
  heroImg,
}: any) => {
  return (
    <div>
      <Grid
        xs={12}
        css={{
          width: "100%",
          height: "auto",
          position: "relative",
          padding: "0",
        }}
        direction="column"
      >
        <img
          className={HackLayoutStyles.hostCover}
          src={heroImg}
          alt="powered by Ngaged"
        />
      </Grid>
      <div>{children}</div>
      <Grid
        xs={12}
        css={{
          width: "100%",
          height: "auto",
          position: "relative",
          padding: "0",
          textAlign: 'center'
        }}
        direction="column"
      >
        <Spacer />
        <Spacer />
        <Text>
          Powered by <Link href="https://ngaged.work">Ngaged</Link>
        </Text>
        <Spacer />
        <Spacer />
      </Grid>
    </div>
  );
};
export default HackathonLayout;
