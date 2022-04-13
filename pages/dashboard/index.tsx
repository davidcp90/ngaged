import type { NextPage } from "next";
import Head from "next/head";
import PublicLayout from "../../components/layout/publicLayout";
import { useUser } from "@auth0/nextjs-auth0";
import NotLoggedIn from "../../components/layout/notLoggedIn";
import DashboardLayout from "../../components/dashboard/layout/dashboardLayout";
import DashboardMain from "../../components/dashboard/presentation/dashboardMain";
const Dashboard: NextPage = () => {
  const { user }: any = useUser();
  return user ? (
    <PublicLayout beta={false}>
      <Head>
        <title>Dashboard | Ngaged Work - Happier teams</title>
        <meta
          name="description"
          content="Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout currentPage="main" user={user}>
        <DashboardMain/>
      </DashboardLayout>
    </PublicLayout>
  ) : <NotLoggedIn/>;
};

export default Dashboard;
