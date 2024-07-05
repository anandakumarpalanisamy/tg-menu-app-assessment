// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Article } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  const articles = [
    { label: "Article 1", slug: "article-1" },
    { label: "Article 2", slug: "article-2" },
    { label: "Article 3", slug: "article-3" },
    { label: "Article 4", slug: "article-4" },
    { label: "Article 5", slug: "article-5" },
    { label: "Article 6", slug: "article-6" },
    { label: "Article 7", slug: "article-7" },
    { label: "Article 8", slug: "article-8" },
    { label: "Article 9", slug: "article-9" },
    { label: "Article 10", slug: "article-10" },
  ];
  res.status(200).json(articles);
}
