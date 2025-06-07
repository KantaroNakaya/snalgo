import WorkList from "@/app/_components/WorkList";
import SearchField from "@/app/_components/SearchField";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";
import { getWorkList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import Hero from "@/app/_components/Hero";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    try {
        const { contents: work } = await getWorkList({
            limit: WORKBOOK_LIST_LIMIT,
            q: searchParams.q,
        });

        return (
            <>
                <Hero title="Workbook" sub="ワークブック" />
                <SearchField />
                <WorkList workbook={work} />
            </>
        );
    } catch (error) {
        console.error("Error fetching work list:", error);
        notFound();
    }
}
