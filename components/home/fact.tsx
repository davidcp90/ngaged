import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import Image from "next/image";
import teamWork from "../../public/images/home/team-work.gif";
import factStyles from "./fact.module.css";
const Fact = () => {
  return (
    <div className={factStyles.factBg}>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={8} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text h2 size="4em" color="#fff">
            Ngaged = Profits
          </Text>
          <Text size="2.5em" css={{ textAlign: "center" }} color="#fff">
            &quot;Your number one customers are your people. Look after your
            employees and then they will take care of your customers&quot;
          </Text>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </Grid>
      </Grid.Container>
    </div>
  );
};
export default Fact;
