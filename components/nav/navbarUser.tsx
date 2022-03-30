
import { Button, Grid } from "@nextui-org/react";

const NavbarUser = ({transparentBg}: any) => {
  return (
    <Grid.Container alignItems="center" justify="flex-end" gap={2}>
      <Grid>
        <Button
          color="primary"
          size="sm"
          auto
        >
          Login
        </Button>
      </Grid>
      <Grid>
        <Button
          css={{
            border: transparentBg ? "2px solid white" : "none",
          }}
          color="gradient"
          light={transparentBg}
          size="xl"
          auto
        >
          Sign-up
        </Button>
      </Grid>
    </Grid.Container>
  );
};
export default NavbarUser;
