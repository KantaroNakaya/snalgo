import type { Metadata } from "next";
import Work from "@/app/_components/Work";
import ButtonLink from "@/app/_components/ButtonLink";
import { getWorkDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

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
    const data = await getWorkDetail(params.slug,{
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
    const data = await getWorkDetail(params.slug,{ draftKey: searchParams.dk, }).catch(notFound);
    return(
        <>
            <Work data={data}/>
            <div>
                <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
            </div>
        </>
    )
}
