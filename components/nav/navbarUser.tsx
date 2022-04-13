import { useUser } from "@auth0/nextjs-auth0";
import NavbarLogin from "./navbarLogin";
import { Grid, User, Tooltip, Col, Row, Button } from "@nextui-org/react";
import { userPicture } from "../../lib/userPicture.lib";
import { Logout } from "react-iconly";

const NavBarUserMenu = () => {
  return (
    <Col>
      <Row>
        <a href="/api/auth/logout">
          <Button light color="primary" auto>
            <Logout set="bulk" />
            Log-out
          </Button>
        </a>
      </Row>
    </Col>
  );
}

const NavbarUser = () => {
  const { user }: any = useUser();
  const picture = userPicture(user);
  return user ? (
    <Grid.Container alignItems="center" justify="flex-end" gap={2}>
      <Tooltip
        placement="bottomEnd"
        trigger="click"
        content={<NavBarUserMenu />}
      >
        <User
          src={picture}
          name={user.nickname}
          bordered
          zoomed
          pointer={true}
          color="gradient"
        />
      </Tooltip>
    </Grid.Container>
  ) : (
    <NavbarLogin />
  );
};

export default NavbarUser;
