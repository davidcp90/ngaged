import {
  Button,
  Spacer,
  Text,
  Grid
} from "@nextui-org/react";
import Image from "next/image";
import teamWork from "../../public/images/home/team-work.gif";
import { ChevronDown } from "react-iconly";
const HomeHero = () => {
  return (
    <Grid.Container gap={2} alignItems="center" justify="center">
      <Grid justify="center" xs={12} sm={4}>
        <Image src={teamWork} alt="Team Dancing" />
      </Grid>
      <Grid xs={12} sm={4} direction="column">
        <Spacer />
        <Spacer />
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, #fa222a -10%, #38acfe 70%"
          }}
          weight="bold"
        >
          Your team deserves to work Ngaged.
        </Text>
        <Spacer />
        <Spacer />
        <Grid xs={4} direction="column">
          <Button color="gradient" size="lg" shadow>
            Discover how <ChevronDown set="bold" />
          </Button>
        </Grid>
        <Spacer />
        <Spacer />
      </Grid>
    </Grid.Container>
  );
};
export default HomeHero;
