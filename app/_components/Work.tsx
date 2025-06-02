"use client";

import type { Work } from "@/app/_libs/microcms";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                <h2 className="text-xl font-bold mb-4">問題</h2>
                <p>{data.description}</p>
            </div>
            <div className="mb-16">
                <h2 className="text-xl font-bold mb-4">解答テンプレート</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.templateCode)}
                </SyntaxHighlighter>
            </div>
            <div className="mb-16">
                <h2 className="text-xl font-bold mb-4">解答コード01</h2>
                <div className="mb-4 border-l-4 border-primary">
                    <p className="flex items-center gap-1">
                        <Image
                            src="/icon-hint.png"
                            alt=""
                            width={40}
                            height={40}
                        />
                        <span className="text-sm font-bold">ヒント</span>
                    </p>
                    <p className="pl-4 mt-4">{data.answer01_desc}</p>
                </div>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.answer01_code)}
                </SyntaxHighlighter>
            </div>
            {data.answer02_code && (
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-4">解答コード02</h2>
                    <div className="mb-4 border-l-4 border-primary">
                        <p className="flex items-center gap-1">
                            <Image
                                src="/icon-hint.png"
                                alt=""
                                width={40}
                                height={40}
                            />
                            <span className="text-sm font-bold">ヒント</span>
                        </p>
                        <p className="pl-4 mt-4">{data.answer02_desc}</p>
                    </div>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answer02_code)}
                    </SyntaxHighlighter>
                </div>
            )}
            {data.answer03_code && (
                <div className="mb-16">
                    <h2 className="text-xl font-bold mb-4">解答コード03</h2>
                    <div className="mb-4 border-l-4 border-primary">
                        <p className="flex items-center gap-1">
                            <Image
                                src="/icon-hint.png"
                                alt=""
                                width={40}
                                height={40}
                            />
                            <span className="text-sm font-bold">ヒント</span>
                        </p>
                        <p className="pl-4 mt-4">{data.answer03_desc}</p>
                    </div>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answer03_code)}
                    </SyntaxHighlighter>
                </div>
            )}
        </main>
    );
}
