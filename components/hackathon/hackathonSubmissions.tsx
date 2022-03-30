import { Button, Spacer, Text, Grid } from "@nextui-org/react";
const HackathonSubmissions = () => {
  return (
    <>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} alignItems="center" direction="column">
          <Text h2>Submit your proposal</Text>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default HackathonSubmissions;
