import type { News } from "@/app/_libs/microcms";
import Date from "./Date";

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <div className="mb-16">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            <p className="mb-16">{data.description}</p>
        </main>
    );
}
