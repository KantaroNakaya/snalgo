import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
    const data = await getNewsList({
        limit: TOP_NEWS_LIMIT,
    });
    return (
        <div className="bg-black/90 text-white">
            <section className="flex items-center justify-center overflow-hidden py-32">
                <div>
                    <h1 className="text-5xl text-center">
                        <span className="block font-bold mb-4 text-2xl">AlgoSnap（JavaScript編）</span>
                        <span className="block text-sm">スマホでサクッと学べるアルゴリズム基礎ドリル</span>
                    </h1>
                </div>
            </section>
            <section className="max-w-4xl mx-auto px-10 py-6">
                <h2 className="text-2xl">News</h2>
                <NewsList news={data.contents} />
                <div className="flex justify-end mt-4">
                    <ButtonLink href="/news">もっとみる</ButtonLink>
                </div>
            </section>
        </div>
    );
}
