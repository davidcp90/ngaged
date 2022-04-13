import { Card, Text, Divider, Button, Row, Col } from "@nextui-org/react";

export default function DashboardProposals() {
  return (
    <Card>
      <Card.Header>
        <Col>
          <Text size={14} weight="bold" transform="uppercase">
            Propossals
          </Text>
          <Text h3>Last ideas</Text>
        </Col>
      </Card.Header>
      <Divider />
      <Card.Body css={{ py: "$10" }}>
        <ul>
          <li key={1}>Change managements</li>
          <li key={2}>Change managements</li>
          <li key={3}>Change managements</li>
        </ul>
      </Card.Body>
      <Divider />
      <Card.Footer>
        <Row justify="flex-end">
          <Button flat auto color="gradient" size="md">
            <Text
              css={{ color: "inherit" }}
              size={14}
              weight="bold"
              transform="uppercase"
            >
              Apply to propossals
            </Text>
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}
