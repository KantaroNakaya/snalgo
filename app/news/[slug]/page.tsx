import type { Metadata } from "next";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props ={
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    }
};

export async function generateMetadata
({ params, searchParams }: Props): Promise<Metadata>{
    const data = await getNewsDetail(params.slug,{
        draftKey: searchParams.dk,
    });

    return{
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
        },
    };
}

export default async function Page({params,searchParams}: Props){
    const data = await getNewsDetail(params.slug,{ draftKey: searchParams.dk, }).catch(notFound);
    return(
        <>
            <Article data={data}/>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </>
    )
}
