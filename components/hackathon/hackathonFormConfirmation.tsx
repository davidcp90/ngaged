import {
  Spacer,
  Text,
  Grid,
} from "@nextui-org/react";

const HackathonFormConfirmation = ({name}: any) => {
  const shortName = name.split(" ")[0];
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} alignItems="center" justify="center" direction="column">
        <Text h2 css={{ textAlign: "center" }}>
          <span style={{ textTransform: "capitalize" }}>{shortName}</span>, See
          you in Bogotá!
        </Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Text h3 css={{ textAlign: "center" }}>
          Train your building skills and get ready to build the most powerful
          digital superpower for e-groceries.
        </Text>
        <Spacer />
        <Spacer />
        <img
          width="300"
          src="https://s3.tebi.io/ngaged/hackathon/Stickers-01.png"
          alt="stickers"
        />
      </Grid>
    </Grid.Container>
  );
}

export default HackathonFormConfirmation;
