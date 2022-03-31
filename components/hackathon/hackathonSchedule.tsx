import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import hackathonScheduleData from "../../data/hackathonScheduleData";
const ScheduleTable = ({rows}: any) => {
  const columns: any = [
    {
      key: "time",
      label: "Time",
    },
    {
      key: "activity",
      label: "Activity",
    }
  ];
  return (
    <Table
      sticked
      striped
      aria-label="hackathon schedule"
      css={{
        height: "auto",
        width: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column: any) => (
          <Table.Column style={{minWidth: "110px"}} key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item: any) => (
          <Table.Row key={item.key}>
            {(columnKey: any) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

const HackathonSchedule = () => {
  return (
    <>
      <Grid.Container gap={2} alignItems="center" justify="center">
        <Grid xs={10} alignItems="center" direction="column">
          <Text h2>Schedule</Text>
          <Grid xs={12} alignItems="center" direction="column">
            <Text h3>Day 1</Text>
            <Spacer />
            <Grid xs={12} alignItems="center" direction="column">
              <ScheduleTable rows={hackathonScheduleData["one"]} />
            </Grid>
            <Spacer />
          </Grid>
          <Grid xs={12} alignItems="center" direction="column">
            <Text h3>Day 2</Text>
            <Spacer />
            <Grid xs={12} alignItems="center" direction="column">
              <ScheduleTable rows={hackathonScheduleData["two"]} />
            </Grid>
            <Spacer />
          </Grid>
          <Grid xs={12} alignItems="center" direction="column">
            <Text h3>Day 3</Text>
            <Spacer />
            <Grid xs={12} alignItems="center" direction="column">
              <ScheduleTable rows={hackathonScheduleData["three"]} />
            </Grid>
            <Spacer />
          </Grid>
        </Grid>
        <Spacer />
        <Spacer />
        <Grid xs={12} alignItems="center" justify="center">
          <img
            width="300"
            src="https://s3.tebi.io/ngaged/hackathon/Stickers-02.png"
            alt="stickers"
          />
        </Grid>
      </Grid.Container>
    </>
  );
};



export default HackathonSchedule;
