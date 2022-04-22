import { Button, Spacer, Text, Grid } from "@nextui-org/react";
import HackathonIdea from "./hackathonIdea";
import HackathonIdeaModal from "./hackathonIdeaModal";
import { useState, useEffect } from "react";
import { getProposals } from "../../data/hackathonProposals.data";

const HackathonTeamFinder = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [proposals, setProposals] = useState([]);
  useEffect(() => {
    getProposals()
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProposals(result.hackathon_proposals);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const modalHandler = (content: any) => {
    setVisibleModal(true);
    setModalContent(content);
  };
  const closeModalHandler = () => setVisibleModal(false);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Grid.Container gap={2} alignItems="center" justify="center">
          <Grid xs={12} alignItems="center" direction="column">
            <Text h2>Join a team</Text>
            <Spacer />
            <Text size="1.2em">
              There are some awesome ideas that your mates are proposing, join
              them, or claim a predefined idea.
            </Text>
            <Spacer />
            <Spacer />
            <Grid.Container gap={2} alignItems="center" justify="center">
              {proposals.map((proposal) => {
                return (
                  <HackathonIdea
                    key={proposal.id}
                    content={proposal}
                    openIdea={modalHandler}
                  />
                );
              })}
            </Grid.Container>
          </Grid>
        </Grid.Container>
        {modalContent ? (
          <HackathonIdeaModal
            visible={visibleModal}
            closeHandler={closeModalHandler}
            content={modalContent}
          />
        ) : null}
      </>
    );
  }
};

export default HackathonTeamFinder;
