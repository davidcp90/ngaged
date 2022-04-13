import {
  Button,
  Spacer,
  Text,
  Grid,
  Input,
  Loading,
  Textarea
} from "@nextui-org/react";
import { useState } from "react";
import { submitProposal } from "../../data/hackathonProposals.data";
import HackathonFormConfirmation from "./hackathonFormConfirmation";

const HackathonSubmitProposal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [saved, setSaved] = useState(false);
  const submitData = async() => {
    const payload = {
      name: name,
      author: author,
      description: description,
    };
    const dataSubmited = await submitProposal(payload);
    if(dataSubmited.status === 200) {
      setSaved(true);
    }
    console.log(dataSubmited);
  };
  const disabledSubmit =
    (name !== "" && author !== "" && description !== "");
  return !saved ? (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={10} sm={8} md={6} direction="column" justify="center">
          <Text h2 css={{ textAlign: "center" }}>
            Submit your idea
          </Text>
          <Spacer />
          <Text size="1.2em">
            We want to expand our product offering to others parts of the supply
            chain, or strength those parts that we are currently serving but
            need more firepower!.
          </Text>
          <Text size="1.2em" css={{ textAlign: "justify" }}>
            You can propose ideas aligned to the following topics:
          </Text>
          <ul>
            <li key="1">- (Open) New products for retailers</li>
            <li key="2">- (Open) New features on top of our products</li>
            <li key="3">
              - Reduce Out of Stock in a physical supermarket store
            </li>
            <li key="4">- Make a darkstore operate better</li>
            <li key="5">
              - Most wanted features . See the list here (pending)
              <a href="#"></a>
            </li>
          </ul>
          <Spacer />
          <Spacer />
          <Spacer />
          <Grid>
            <Input
              bordered
              label="Name of the idea"
              color="secondary"
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
              label="Your Name"
              color="secondary"
              size="lg"
              helperText="Required"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </Grid>
          <Spacer />
          <Spacer />
          <Grid xs={12}>
          <Textarea
            bordered
            fullWidth
            label="Describe your idea"
            placeholder="Please describe why do you want to build this, if you have some inspiration from another product, data to support that this is a good idea, etc."
            color="secondary"
            size="lg"
            helperText="Required"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          </Grid>
          <Spacer />
          <Spacer />
          <Spacer />
          <Grid>
          <Button
            disabled={!disabledSubmit}
            size={"lg"}
            shadow
            color="gradient"
            onClick={() => submitData()}
            auto
          >
            {true ? (
              "Submit my idea"
            ) : (
              <Loading type="points" color="white" size="sm" />
            )}
          </Button>
          </Grid>
        </Grid>
      </Grid.Container>
    </>
  ) : (
    <HackathonFormConfirmation name={name} />
  );
};

export default HackathonSubmitProposal;
