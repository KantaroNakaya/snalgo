import Image from "next/image";
import Date from "./Date";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p className="text-gray-600">記事がありません。</p>;
    }
    return (
        <ul className="space-y-4">
            {news.map((article) => (
                <li key={article.id} className="border-b border-gray-200 pb-4">
                    <Link
                        href={`/news/${article.id}`}
                        className="block hover:bg-gray-50 p-4 rounded-lg transition-colors"
                    >
                        <dl>
                            <dt className="text-xl font-bold mb-2">
                                {article.title}
                            </dt>
                            <dd>
                                <Date
                                    date={
                                        article.publishedAt ?? article.createdAt
                                    }
                                />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
