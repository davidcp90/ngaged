import {
  Button,
  Spacer,
  Text,
  Grid,
  Input,
  Radio,
  Loading,
} from "@nextui-org/react";
import { useState } from "react";
import { submitRSVP } from "../../data/hackathonRsvp.data";

const HackathonConfirmed = ({name}: any) => {
  const shortName = name.split(" ")[0];
  return (
    <Grid.Container gap={2}>
      <Grid xs={12} alignItems="center" justify="center" direction="column">
        <Text h2 css={{ textAlign: "center" }}>
          <span style={{ textTransform: "capitalize" }}>{shortName}</span>, See
          you in Bogotá!
        </Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Text h3 css={{ textAlign: "center" }}>
          Train your building skills and get ready to build the most powerful
          digital superpower for e-groceries.
        </Text>
        <Spacer />
        <Spacer />
        <img
          width="300"
          src="https://s3.tebi.io/ngaged/hackathon/Stickers-01.png"
          alt="stickers"
        />
      </Grid>
    </Grid.Container>
  );
}


const HackathonRsvp = () => {
  const [location, setLocation] = useState("bogota");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [host, setHost] = useState("false");
  const [saved, setSaved] = useState(false);
  const [hostAddress, setHostAddress] = useState("");
  const submitData = async() => {
    const payload = {
      name: name,
      email: email,
      location: location,
      host: location === "bogota" && host === "true",
      host_address:
        location === "bogota" && host === "true" ? hostAddress : '',
    };
    const dataSubmited = await submitRSVP(payload);
    if(dataSubmited.status === 200) {
      setSaved(true);
    }
    console.log(dataSubmited);
  };
  const disabledSubmit =
    (name !== "" && email !== "" && host !== "") ||
    (name !== "" && email !== "" && host !== "" && hostAddress !== "");
  return !saved ? (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12} direction="column">
          <Text h2 css={{ textAlign: "center" }}>
            RSVP
          </Text>
          <Text h3 css={{ textAlign: "center" }}>
            Save your seat
          </Text>
          <Spacer />
          <Spacer />
          <Spacer />
          <Text h4>Your information</Text>
          <Spacer />

          <Grid>
            <Input
              bordered
              labelPlaceholder="Name"
              color="success"
              size="lg"
              helperText="Required"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Spacer />
          <Spacer />
          <Grid>
            <Input
              bordered
              labelPlaceholder="Email"
              color="success"
              size="lg"
              helperText="Required"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Spacer />
          <Spacer />
          <Grid>
            <Text h4>Where do you live?</Text>
            <Spacer />
            <Radio.Group value={location}>
              <Radio
                color="secondary"
                onChange={() => setLocation("bogota")}
                size="md"
                value="bogota"
              >
                Bogot&aacute; ó Alrededores, Colombia
              </Radio>
              <Radio
                color="success"
                onChange={() => setLocation("colombia")}
                size="md"
                value="colombia"
              >
                Other cities, Colombia
              </Radio>
              <Radio
                color="error"
                onChange={() => setLocation("international")}
                size="md"
                value="international"
              >
                International
              </Radio>
            </Radio.Group>
          </Grid>
          {location === "bogota" ? (
            <>
              <Spacer />
              <Spacer />
              <Grid>
                <Text h4>
                  Would you be able to host a fellow Instaleaper at your home?
                </Text>
                <Spacer />
                <Radio.Group value={host} row>
                  <Radio
                    color="secondary"
                    onChange={() => setHost("true")}
                    size="md"
                    value="true"
                  >
                    Yes
                  </Radio>
                  <Radio
                    color="error"
                    onChange={() => setHost("false")}
                    size="md"
                    value="false"
                  >
                    No
                  </Radio>
                </Radio.Group>
              </Grid>
            </>
          ) : null}
          {location === "bogota" && host === "true" ? (
            <>
              <Spacer />
              <Spacer />
              <Grid>
                <Text h4>Where do you live?</Text>
                <Spacer />
                <Spacer />
                <Input
                  bordered
                  labelPlaceholder="Your home address"
                  color="secondary"
                  size="lg"
                  helperText="Required"
                  onChange={(e) => {
                    setHostAddress(e.target.value);
                  }}
                />
              </Grid>
            </>
          ) : null}
          <Spacer />
          <Spacer />
          <Button
            disabled={!disabledSubmit}
            size={"lg"}
            shadow
            color="gradient"
            onClick={() => submitData()}
            auto
          >
            {true ? (
              "Save my seat"
            ) : (
              <Loading type="points" color="white" size="sm" />
            )}
          </Button>
        </Grid>
      </Grid.Container>
    </>
  ) : (<HackathonConfirmed name={name} />);
};

export default HackathonRsvp;
