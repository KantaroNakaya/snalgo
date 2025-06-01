import Workbook from "./_components/WorkList";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";
import { getWorkList } from "@/app/_libs/microcms";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";

export const revalidate = 60;

    export default async function Home() {
        const workData = await getWorkList({
            limit: TOP_NEWS_LIMIT,
        });
        const newsData = await getNewsList({
            limit: TOP_NEWS_LIMIT,
        });
    return (
        <div>
            <section className="flex items-center justify-center overflow-hidden py-32">
                <div>
                    <h1 className="text-5xl text-center">
                        <span className="block font-bold mb-4 text-2xl md:text-4xl">
                            AlgoSnap（JavaScript編）
                        </span>
                        <span className="block text-sm md:text-xl">
                            スマホでサクッと学べるアルゴリズム基礎ドリル
                        </span>
                    </h1>
                </div>
            </section>
            <section className="max-w-3xl mx-auto px-10 py-6">
                <h2 className="text-3xl">問題例</h2>
                <Workbook workbook={workData.contents} />
                <div className="flex justify-end mt-8">
                    <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
                </div>
            </section>
            <section className="max-w-3xl mx-auto px-10 py-6">
                <h2 className="text-3xl">お知らせ</h2>
                <NewsList news={newsData.contents} />
                <div className="flex justify-end mt-8">
                    <ButtonLink href="/news">お知らせ一覧へ</ButtonLink>
                </div>
            </section>
        </div>
    );
}
