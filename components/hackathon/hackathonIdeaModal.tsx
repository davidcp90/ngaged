import {
  Modal,
  Text,
  Grid,
  Button,
  Avatar,
  Input,
  Spacer,
  Loading
} from "@nextui-org/react";
import { userPicture } from "../../lib/userPicture.lib";
import { useMediaQuery } from "../../lib/useMediaQuery.lib";
import { useState } from "react";
import { claimProposal, applyToProposal } from "../../data/hackathonProposals.data";

const HackathonIdeaModal = ({
  visible = false,
  closeHandler = () => {},
  content,
}) => {
  const { id, name, author, applicants, description } = content;
  const isSmall = useMediaQuery(600);
  const savedname = localStorage.getItem("applicantData") || null;
  const [savedName, setName] = useState(savedname ? savedname : "");
  const [saved, setSaved] = useState(false);
  const nameHandler = (e) => setName(e.target.value);
  const controlCloseAction = () => {
    setSaved(false);
    setName("");
    closeHandler();
    setTimeout ( () => {
      location.reload();    
    }, 300);
    
  };
  const submitClaimProposal = async () => {
    const payload = {
      author: savedName,
    };
    const dataSubmited = await claimProposal(id, payload);
    if (dataSubmited.status === 200) {
      setSaved(true);
    }
  };
  const applyToProposalRequest = async () => {
      const payload = {
        idea: id,
        name: savedName,
      };
      const dataSubmited = await applyToProposal(payload);
      if (dataSubmited.status === 200) {
        setSaved(true);
      }
    };
  return (
    <Modal
      closeButton
      scroll
      width={isSmall ? "100%" : "600px"}
      aria-labelledby="modal-title"
      open={visible}
      onClose={controlCloseAction}
    >
      <Modal.Header>
        <Grid.Container gap={1}>
          <Grid>
            <Avatar
              src={userPicture(null, author)}
              color="gradient"
              bordered
              zoomed
              size="lg"
            />
          </Grid>
          <Grid xs={9} direction="column" justify="flex-start">
            <Text h3 style={{ textAlign: "left" }}>
              {name}
            </Text>
            {applicants ? (
              <Text style={{ textAlign: "left" }}>{applicants} Applicants</Text>
            ) : null}
          </Grid>
        </Grid.Container>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <Text>{description}</Text>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        {saved ? (
          <Grid.Container gap={2}>
            {" "}
            <Grid xs={12}>
              <Text h3 color="success" size="1.3em">
                Thanks for voting/claiming this idea.
              </Text>
            </Grid>
          </Grid.Container>
        ) : (
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Text h3 size="1.3em">
                Join this team
              </Text>
            </Grid>
            <Grid xs={4}>
              <Input
                bordered
                clearable
                placeholder="Your name"
                onChange={(e) => nameHandler(e)}
              />
            </Grid>
            <Grid xs={8} justify="flex-end">
              {!author || author === "" ? (
                <Button auto onClick={submitClaimProposal}>
                  Claim
                </Button>
              ) : null}
              <Spacer />
              <Button auto color="gradient" onClick={applyToProposalRequest}>
                Apply
              </Button>
            </Grid>
          </Grid.Container>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default HackathonIdeaModal;
