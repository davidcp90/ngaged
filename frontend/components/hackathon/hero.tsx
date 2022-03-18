import {
  Button,
  Spacer,
  Text,
  Grid
} from "@nextui-org/react";
import Image from "next/image";
import teamWork from "../../public/images/home/team-work.gif";
import { ChevronDown } from "react-iconly";
const HackathonHero = () => {
  return (
    <Grid
      xs={12}
      css={{
        backgroundImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS724sl5oTYuo7ZkzuHBmdS9CmaWE3VgbNctg&usqp=CAU',
        backgroundSize: "cover",
        height: "480px",
      }}
      direction="column"
    >
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </Grid>
  );
};
export default HackathonHero;
