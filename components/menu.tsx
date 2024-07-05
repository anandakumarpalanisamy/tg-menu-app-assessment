import Link from "next/link";
import { GetServerSideProps } from "next";
import { Article } from "@/types";

interface MenuComponentProps {
  articles: Article[];
}

export default function Menu({ articles }: MenuComponentProps) {
  return (
    <div className="py-16 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-slate-400 rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/article/${article.slug}`}>
              <div className="p-4 h-40">
                <h3 className="text-lg font-semibold mb-2">{article.label}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  MenuComponentProps
> = async () => {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "production"
        ? "https://<your-domain>"
        : "http://localhost:3000"
    }/api/articles`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
