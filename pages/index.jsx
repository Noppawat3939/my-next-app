import Head from "next/head";
import Layout from "../layout/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Welcome to my-next app | official</title>
      </Head>
      <Layout>
        <h1>Welcome to My-Next app</h1>
      </Layout>
    </>
  );
};

export default index;
