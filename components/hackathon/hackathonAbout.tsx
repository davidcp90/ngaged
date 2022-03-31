import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import { Send, Star, Show } from "react-iconly";
const HackathonAbout = () => {
  return (
    <>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} alignItems="center" direction="column">
          <Text h2>About the event</Text>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} direction="column">
          <Text h2>
            <Send set="bulk" /> Purpose
          </Text>
          <Text size="1.2em">
            We want to expand our product offering to others parts of the supply
            chain, or strength those parts that we are currently serving but
            need more firepower!.
          </Text>
          <Text size="1.2em" css={{ textAlign: "justify" }}>
            You can propose ideas aligned to the following topics:
          </Text>
          <ul>
            <li key="1">- (Open) New products for retailers</li>
            <li key="2">- (Open) New features on top of our products</li>
            <li key="3">
              - Reduce Out of Stock in a physical supermarket store
            </li>
            <li key="4">- Make a darkstore operate better</li>
            <li key="5">
              - Most wanted features . See the list here (pending)
              <a href="#"></a>
            </li>
          </ul>
        </Grid>
        <Grid xs={10} direction="column">
          <Text h2>
            <Star set="bulk" />
            Expectations
          </Text>
          <Text size="1.2em" css={{ textAlign: "justify" }}>
            We want you to work with people that you have never worked of to
            create an MVP for the problem/idea that appeals to you the most.
          </Text>
          <br />
          <Text size="1.2em" css={{ textAlign: "justify" }}>
            The MVP should have the following characteristics:
          </Text>
          <ul>
            <li key="0">- It is targeted to retailers</li>
            <li key="1">
              - It is something that solves a real problem. Someone would have
              the willing to pay for it
            </li>
            <li key="2">
              - It is something that have potential to grow in the next year
            </li>
            <li key="3">- It is easy to understand and use</li>
            <li key="4">- It is well scoped</li>
            <li key="5">- It is based on technology</li>
          </ul>
          <Text color="secondary" blockquote>
            <Grid alignItems="center">
              <Show
                style={{ position: "relative", top: "6px", marginRight: "8px" }}
                set="bulk"
              />
              <span>
                You can present your idea with code, or with a no-code solution.
              </span>
            </Grid>
          </Text>
          <Spacer />
          <Spacer />
          <Grid xs={12} alignItems="center" justify="center">
            <img
              width="300"
              src="https://s3.tebi.io/ngaged/hackathon/Stickers-04.png"
              alt="stickers"
            />
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default HackathonAbout;
