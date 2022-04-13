import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { Home, PaperUpload, Star } from "react-iconly";
const DashboardMenu = () => {
  return (
    <>
      <NextLink href="/dashboard">
        <Link css={{fontSize: "1.15rem", display: "flex", alignItems: "center", padding: "8px 0"}} block color="text" href="#">
          <Home style={{marginRight: "8px"}} set="bulk" />
          Home
        </Link>
      </NextLink>
      <NextLink href="/dashboard/submitPropossal">
        <Link css={{fontSize: "1.15rem", display: "flex", alignItems: "center", padding: "8px 0"}} block color="text" href="#">
          <PaperUpload style={{marginRight: "8px"}} set="bulk" />
          Submit propossal
        </Link>
      </NextLink>
      <NextLink href="/dashboard/propossals">
        <Link css={{fontSize: "1.15rem", display: "flex", alignItems: "center", padding: "8px 0"}} block color="text" href="#">
          <Star style={{marginRight: "8px"}} set="bulk" />
          Apply to propossals
        </Link>
      </NextLink>
    </>
  );
};
export default DashboardMenu;
