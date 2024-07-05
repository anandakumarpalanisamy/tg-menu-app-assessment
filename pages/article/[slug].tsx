import { Layout } from "@/templates/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <main className="h-screen">
        <p className="py-4">
          <Link href="/">Back to Home</Link>
        </p>
        <div className="px-4 py-4 bg-slate-400 rounded-lg shadow-md overflow-hidden h-full">
          <h1 className="py-4">Article</h1>
          <div className="h-50">{slug}</div>
        </div>
      </main>
    </Layout>
  );
}
