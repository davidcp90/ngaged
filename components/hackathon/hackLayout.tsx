import { Grid } from "@nextui-org/react";
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
    </div>
  );
};
export default HackathonLayout;
