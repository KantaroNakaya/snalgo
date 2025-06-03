import { getWorkList } from "@/app/_libs/microcms";
import WorkList from "@/app/_components/WorkList";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "../_components/SearchField";

export default async function Page() {
    const { contents: workbook, totalCount } = await getWorkList({
        limit: WORKBOOK_LIST_LIMIT,
    });
    return (
        <>
            <SearchField />
            <WorkList workbook={workbook} />
            <Pagination totalCount={totalCount} currentPage={1} perPage={WORKBOOK_LIST_LIMIT} basePath="/workbook" />
        </>
    );
}
