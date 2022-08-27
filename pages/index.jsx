import Head from "next/head";
import Layout from "../layout/Layout";
import { useId } from "react";
import { Content } from "../components";
import indexStyle from "../styles/Index.module.css";

const index = ({ data }) => {
  const { index_container, index_title } = indexStyle;

  return (
    <>
      <Head>
        <title>Welcome to my-next app | official</title>
        <link
          rel="icon"
          href="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
        />
      </Head>
      <Layout>
        <h1 className={index_title}>
          Welcome to <span>My-Next app</span>
        </h1>
        <section className={index_container}>
          {data.map((item) => (
            <Content key={useId()} list={item} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
