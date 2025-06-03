"use client";

import type { Work } from "@/app/_libs/microcms";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import AnswerCode from "./AnswerCode";

const SyntaxHighlighter = dynamic(
    () => import("react-syntax-highlighter").then((mod) => mod.Prism),
    { ssr: false }
);

type Props = {
    data: Work;
};

// HTMLタグを除去し、<br>やエスケープされたタグを改行に変換する関数
const cleanCode = (code: string | null | undefined): string => {
    if (!code) return "";
    return code.replace(/\\n/g, "\n");
};

export default function Work({ data }: Props) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <main className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">問題</h2>
                <p className="text-lg">
                    <span className="border-b">{data.description}</span>
                </p>
            </div>
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4">解答テンプレート</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.templateCode)}
                </SyntaxHighlighter>
            </div>
            <AnswerCode
                number={1}
                code={data.answer01_code}
                description={data.answer01_desc}
            />
            <AnswerCode
                number={2}
                code={data.answer02_code}
                description={data.answer02_desc}
            />
            <AnswerCode
                number={3}
                code={data.answer03_code}
                description={data.answer03_desc}
            />
        </main>
    );
}
