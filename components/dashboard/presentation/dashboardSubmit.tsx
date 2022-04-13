import { Card, Col, Text, Row, Button } from "@nextui-org/react";
import NextLink from "next/link";
const DashboardSubmit = () => {
  return (
    <Card hoverable cover>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          background: "#999999BB",
        }}
      >
        <Col>
          <Text size={14} weight="bold" transform="uppercase" color="#ffffff">
            Submit your proposal
          </Text>
          <Text h3 color="#ffffff">
            Instaleap wants your ideas
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src="https://s3.tebi.io/ngaged/hackathon/HEROES-01.jpg"
          height={350}
          width="100%"
          alt="Card image background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          background: "#fa222a33",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify="flex-end">
              <NextLink href="/hackathon/instaleap-digital-superpowers">
                <Button flat auto color="gradient">
                  <Text
                    css={{ color: "inherit" }}
                    size={14}
                    weight="bold"
                    transform="uppercase"
                  >
                    Submit idea
                  </Text>
                </Button>
              </NextLink>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default DashboardSubmit;
