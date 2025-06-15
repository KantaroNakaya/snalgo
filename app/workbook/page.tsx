import { getWorkList } from "@/app/_libs/microcms";
import WorkList from "@/app/_components/WorkList";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "../_components/SearchField";
import Hero from "@/app/_components/Hero";
import Howto from "@/app/_components/Howto";

export default async function Page() {
    const { contents: workbook, totalCount } = await getWorkList({
        limit: WORKBOOK_LIST_LIMIT,
    });
    return (
        <>
            <Hero title="Workbook" sub="ワークブック" />
            <Howto />
            <SearchField />
            <WorkList workbook={workbook} />
            <Pagination
                totalCount={totalCount}
                currentPage={1}
                perPage={WORKBOOK_LIST_LIMIT}
                basePath="/workbook"
            />
        </>
    );
}
