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
        <>
            <section className="relative flex items-center justify-center bg-black/50 text-white overflow-hidden py-32 md:py-24">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-4 md:text-3xl md:text-left">
                        AlgoSnap（JavaScript編）
                    </h1>
                    <p className="text-center md:text-left md:text-sm">
                        スマホでサクッと学べるアルゴリズム基礎ドリル
                    </p>
                </div>
                <Image
                    className="absolute top-0 right-0 w-full h-full object-cover object-right -z-10"
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                    priority
                    sizes="100vw"
                />
            </section>
            <section className="relative bg-white max-w-4xl mx-auto px-10 py-6 rounded-[var(--border-radius)] md:px-6 md:py-4">
                <h2 className="text-2xl">News</h2>
                <NewsList news={data.contents} />
                <div className="flex justify-end mt-4">
                    <ButtonLink href="/news">もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
}
