
import { Button, Grid } from "@nextui-org/react";

const NavbarLogin = ({transparentBg}: any) => {
  return (
    <Grid.Container alignItems="center" justify="flex-end" gap={2}>
      <Grid>
        <a href="/api/auth/login">
          <Button
            css={{
              border: transparentBg ? "2px solid white" : "none",
            }}
            color="gradient"
            light={transparentBg}
            size="xl"
            auto
          >
            Login/Sign-up
          </Button>
        </a>
      </Grid>
    </Grid.Container>
  );
};
export default NavbarLogin;
