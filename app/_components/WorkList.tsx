import Link from "next/link";
import type { Work } from "@/app/_libs/microcms";

type Props = {
    workbook: Work[];
};

export default function Workbook({ workbook }: Props) {
    if (workbook.length === 0) {
        return <p className="text-gray-600">問題がありません。</p>;
    }
    return (
        <ul className="space-y-4 mt-10">
            {workbook.map((work) => (
                <li key={work.id} className="border border-gray-200">
                    <Link
                        href={`/workbook/${work.id}`}
                        className="block p-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-[var(--color-text-sub)]"
                    >
                        <dl>
                            <dd className="text-m">{work.title}</dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
