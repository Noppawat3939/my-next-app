import Head from "next/head";
import Layout from "../layout/Layout";

const about = () => {
  return (
    <>
      <Head>
        <title>Welcome to my-next app | About me</title>
      </Head>
      <Layout>
        <div>
          <h1>About page is here</h1>
        </div>
      </Layout>
    </>
  );
};

export default about;
