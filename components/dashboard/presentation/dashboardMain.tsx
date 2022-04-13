import { Card, Grid, Col, Text, Row, Button } from "@nextui-org/react";
import DashboardEvent from "./dashboardEvent";
import DashboardSubmit from "./dashboardSubmit";
import DashboardPropossals from "./dashboardPropossals";
const DashboardMain = () => {
  return (
    <Grid.Container
      css={{ width: "100%" }}
      gap={2}
      justify="space-around"
      alignItems="flex-start"
    >
      <Grid xs={12}>
        <DashboardEvent />
      </Grid>
        <Grid xs={6}><DashboardSubmit /></Grid>
        <Grid xs={6}><DashboardPropossals /></Grid>
    </Grid.Container>
  );
};
export default DashboardMain;
