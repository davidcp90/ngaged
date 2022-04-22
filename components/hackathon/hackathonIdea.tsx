import { Card, Grid, Avatar, Text, Spacer } from "@nextui-org/react";
import { userPicture } from "../../lib/userPicture.lib";
import { Star } from "react-iconly";
const HackathonIdea = ({content, openIdea}) => {
  const { name, author, applicants } = content;
  return (
    <Grid md={6} xs={12} alignItems="center" direction="column">
      <Card
        clickable
        bordered
        shadow={false}
        hoverable
        onClick={() => openIdea(content)}
      >
        <Grid.Container gap={1}>
          <Grid xs={2} md={3}>
            <Avatar
              src={userPicture(null, author)}
              color="gradient"
              bordered
              zoomed
              size="xl"
            />
          </Grid>
          <Grid xs={10} md={9} direction="column">
            <Text h3>{name}</Text>
            <Text>Open to Applicants</Text>
            {!author || author === "" ? (
              <Text
                b
                css={{
                  textGradient: "45deg, $blue500 -20%, $pink500 50%",
                }}
              >
                <Star size="small"/>
                Claim this idea
              </Text>
            ) : null}
          </Grid>
        </Grid.Container>
      </Card>
    </Grid>
  );};


export default HackathonIdea;
