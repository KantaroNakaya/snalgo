import Link from "next/link";

// ローカルでWork型を定義
interface Work {
    id: string;
    title: string;
    description: string;
    content: string;
    language: string;
    framework: string;
    templateCode: string;
    answer01_code: string;
    answer01_hint: string;
    answer01_desc: string;
    answer02_code: string;
    answer02_hint: string;
    answer02_desc: string;
    answer03_code: string;
    answer03_hint: string;
    answer03_desc: string;
    createdAt: string;
    updatedAt: string;
}

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
