import type { Metadata } from "next";
import Work from "@/app/_components/Work";
import ButtonLink from "@/app/_components/ButtonLink";
import { getWorkDetail, getAllWorkList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export async function generateMetadata({
    params,
    searchParams,
}: Props): Promise<Metadata> {
    const data = await getWorkDetail(params.slug, {
        draftKey: searchParams.dk,
    });

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
        },
    };
}

export default async function Page({ params, searchParams }: Props) {
    const data = await getWorkDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    // 全問題を取得
    const allWorks = await getAllWorkList();

    // 現在の問題のインデックスを取得
    const currentIndex = allWorks.findIndex((work) => work.id === params.slug);

    // 前後の問題のIDを取得
    const prevWorkId =
        currentIndex > 0 ? allWorks[currentIndex - 1].id : undefined;
    const nextWorkId =
        currentIndex < allWorks.length - 1
            ? allWorks[currentIndex + 1].id
            : undefined;

    return (
        <>
            <Work data={data} prevWorkId={prevWorkId} nextWorkId={nextWorkId} />
            <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
        </>
    );
}
