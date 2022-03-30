import { useState } from "react";
import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import hcStyles from "./hackathonContent.module.css";
import HackathonAbout from "./hackathonAbout";
import HackathonSchedule from "./hackathonSchedule";
import HackathonRsvp from "./hackathonRsvp";
import HackathonSubmissions from "./hackathonSubmissions";
import HackathonTeamFinder from "./hackathonTeamFinder";

const ContentComponents: any = {
  about: <HackathonAbout/>,
  schedule: <HackathonSchedule/>,
  rsvp: <HackathonRsvp/>,
  submit: <HackathonSubmissions/>,
  find: <HackathonTeamFinder/>
};

const HackathonContent = ({ colors }: any) => {
  const [content, setContent] = useState('about');
  return (
    <div className={hcStyles.hostBg}>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} alignItems="center" direction="column">
          <Spacer />
          <Spacer />
          <Button.Group color="gradient" size="xl" ghost>
            <Button onClick={() => setContent("about")}>
              <b>About the event</b>
            </Button>
            <Button onClick={() => setContent("schedule")}>
              <b>Schedule</b>
            </Button>
            <Button onClick={() => setContent("rsvp")}>
              <b>RSVP</b>
            </Button>
          </Button.Group>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} alignItems="center" direction="column">
          {ContentComponents[content]}
          <Spacer />
          <Spacer />
        </Grid>
      </Grid.Container>
    </div>
  );
};
export default HackathonContent;
