import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import hostStyles from "./host.module.css";
const Host = () => {
  return (
    <div className={hostStyles.hostBg}>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={8} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text h2 size="4em">
            Ngaged = Profits
          </Text>
          <Text size="2.5em" css={{ textAlign: "center" }}>
            "Your number one customers are your people. Look after your
            employees and then they will take care of your customers"
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
export default Host;
