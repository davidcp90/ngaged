import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import hostStyles from "./host.module.css";
const Host = ({details, colors, title}: any) => {
  const titleTextGradient= `45deg, ${colors.primary} -10%, ${colors.secondary} 70%`;
  return (
    <div className={hostStyles.hostBg}>
      {/*<Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={4} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Text h2 size="2em" css={{ textGradient: titleTextGradient }}>
            Hackathon: <br/>
            {title}
          </Text>
        </Grid>
        <Grid xs={8} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Text size="1.2em">{details.description}</Text>
        </Grid>
  </Grid.Container>*/}
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={4} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Text h2 size="2em" css={{ textGradient: titleTextGradient }}>
            Date
          </Text>
          <Text size="1.5em" css={{ textAlign: "center" }}>
            {details.startDate} - {details.endDate}
          </Text>
          <Spacer />
          <Spacer />
        </Grid>
        <Grid xs={4} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Text h2 size="2em" css={{ textGradient: titleTextGradient }}>
            Location
          </Text>
          <Text size="1.5em" css={{ textAlign: "center" }}>
            {details.location}
          </Text>
          <Spacer />
          <Spacer />
        </Grid>
        <Grid xs={4} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Text h2 size="2em" css={{ textGradient: titleTextGradient }}>
            Venue
          </Text>
          <Text size="1.5em" css={{ textAlign: "center" }}>
            {details.venue}
          </Text>
          <Spacer />
          <Spacer />
        </Grid>
      </Grid.Container>
    </div>
  );
};
export default Host;
