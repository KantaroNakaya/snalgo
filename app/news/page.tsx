import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import Hero from "@/app/_components/Hero";

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });
    return(
        <>
            <Hero title="News" sub="ニュース" />
            <NewsList news={news}/>
            <Pagination totalCount={totalCount} currentPage={1} perPage={NEWS_LIST_LIMIT} basePath="/news" />
        </>
    )
}
