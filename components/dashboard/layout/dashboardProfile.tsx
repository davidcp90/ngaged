import { Card, Grid, Avatar, Text } from "@nextui-org/react";
import { userPicture } from "../../../lib/userPicture.lib";
const DashboardProfile = ({user}: any) => {
  const picture = userPicture(user);
  return (
    <>
      <Grid.Container gap={2} justify="space-between">
        <Grid xs={3}>
          <Avatar src={picture} size="xl" />
        </Grid>
        <Grid xs={8} direction="column">
          <Text
            css={{
              textGradient: "45deg, #fa222a -10%, #38acfe 70%",
            }}
            weight="bold"
            size="1.25em"
          >
            {user.name}
          </Text>
          <Text>Instaleap</Text>
        </Grid>
      </Grid.Container>
    </>
  );
};
export default DashboardProfile;
