import { Card, Grid, Col, Text, Row, Button } from "@nextui-org/react";
import NextLink from "next/link";
const DashboardEvent = () => {
  return (
    <Card hoverable cover>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          background: "#38acfeBB",
        }}
      >
        <Col>
          <Text size={14} weight="bold" transform="uppercase" color="#ffffff">
            Your next event
          </Text>
          <Text h3 color="#ffffff">
            Instaleap - Hackathon Digital Superpowers
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src="https://s3.tebi.io/ngaged/hackathon/Poster-04.jpeg"
          height={380}
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
            <Text color="white" size={18}>
              April 26 - April 29
            </Text>
            <Text color="white" size={16}>
              Bogot&aacute;, Colombia - Venue: To be confirmed
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <NextLink href="/hackathon/instaleap-digital-superpowers">
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={14}
                    weight="bold"
                    transform="uppercase"
                  >
                    View event page
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
export default DashboardEvent;
