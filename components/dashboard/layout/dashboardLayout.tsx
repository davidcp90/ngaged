import { Card, Grid, Spacer } from '@nextui-org/react';
import DashboardMenu from './dashboardMenu';
import DashboardProfile from "./dashboardProfile";
const DashboardLayout = ({ children, user }: any) => {
  return (
    <>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Grid.Container
        css={{ width: "100%" }}
        gap={2}
        justify="center"
        alignItems="flex-start"
      >
        <Grid xs={12}>
          <Grid xs={12} md={3} direction="column">
            <Card css={{ mw: "100%" }}>
              <Grid.Container gap={2} direction="column">
                <DashboardProfile user={user} />
                <Spacer />
                <Spacer />
                <DashboardMenu />
              </Grid.Container>
            </Card>
          </Grid>
          <Grid xs={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Grid.Container>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </>
  );
}

export default DashboardLayout;