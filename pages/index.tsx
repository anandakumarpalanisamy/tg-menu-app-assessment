import NavMenu from "@/components/menu";
import { Layout } from "@/templates/Layout";
import { Article } from "@/types";
import { GetStaticProps } from "next";

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  return (
    <Layout>
      <NavMenu articles={articles}></NavMenu>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
