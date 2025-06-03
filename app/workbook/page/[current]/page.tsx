import { getWorkList } from "@/app/_libs/microcms";
import WorkList from "@/app/_components/WorkList";
import { notFound } from "next/navigation";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: work, totalCount } = await getWorkList({
        limit: WORKBOOK_LIST_LIMIT,
        offset: WORKBOOK_LIST_LIMIT * (current - 1),
    });

    if (work.length === 0) {
        notFound();
    }

    return (
        <>
            <WorkList workbook={work} />
            <Pagination
                totalCount={totalCount}
                currentPage={current}
                perPage={WORKBOOK_LIST_LIMIT}
            />
        </>
    );
}
