import type { News } from "@/app/_libs/microcms";
import Date from "./Date";

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <div className="mb-6">
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                    __html: data.content ?? "",
                }}
            ></div>
        </main>
    );
}
