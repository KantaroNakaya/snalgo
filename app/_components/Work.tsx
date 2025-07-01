"use client";

import type { Work } from "@/app/_libs/microcms";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import AnswerCode from "./AnswerCode";
import Accordion from "./Accordion";
import { getLanguageFrameworkLabel } from "@/app/_libs/utils";

const SyntaxHighlighter = dynamic(
    () => import("react-syntax-highlighter").then((mod) => mod.Prism),
    { ssr: false }
);

type Props = {
    data: Work;
    prevWorkId?: string;
    nextWorkId?: string;
};

// HTMLタグを除去し、<br>やエスケープされたタグを改行に変換する関数
const cleanCode = (code: string | null | undefined): string => {
    if (!code) return "";
    return code.replace(/\\n/g, "\n");
};

export default function Work({ data, prevWorkId, nextWorkId }: Props) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <main className="max-w-xl mx-auto">
            <p className="text-xl font-bold mb-2">
                {getLanguageFrameworkLabel(
                    Array.isArray(data.language)
                        ? data.language[0]
                        : data.language,
                    Array.isArray(data.framework)
                        ? data.framework[0]
                        : data.framework
                )}
            </p>
            <h1 className="text-xl font-bold mb-8">{data.title}</h1>
            <div className="mb-16">
                <h2 className="text-xl font-bold mb-4">問題</h2>
                <p className="text-lg">
                    <span className="border-b">{data.description}</span>
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">解答テンプレート</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.templateCode)}
                </SyntaxHighlighter>
            </div>
            <div className="mb-16">
                <Accordion title="解答方法について">
                    <li className="py-2">
                        解答テンプレートの「ここに書くコードを考えてください」に当てはまるコードを考えてください。
                    </li>
                    <li className="py-2">
                        繰り返し取り組むことで考え方の型を身につけることができます。
                    </li>
                </Accordion>
                <Accordion title="解答コードについて">
                    <li className="py-2">
                        解答コード01では、自らアルゴリズムを考えることを促すヒントと解答を用意しています。
                    </li>
                    <li className="py-2">
                        解答コード02や03では、メソッドを用いて簡略なソースコードで実装できる解答を用意しています。
                    </li>
                </Accordion>
            </div>
            <div className="mb-16">
                <AnswerCode
                    number={1}
                    code={data.answer01_code}
                    hint={data.answer01_hint}
                    desc={data.answer01_desc}
                />
                <AnswerCode
                    number={2}
                    code={data.answer02_code}
                    hint={data.answer02_hint}
                    desc={data.answer02_desc}
                />
                <AnswerCode
                    number={3}
                    code={data.answer03_code}
                    hint={data.answer03_hint}
                    desc={data.answer03_desc}
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                {prevWorkId ? (
                    <a
                        href={`/workbook/${prevWorkId}`}
                        className="bg-blue-700 hover:bg-opacity-80 transition-all duration-300 text-center py-2"
                    >
                        <span className="text-sm text-white">前の問題</span>
                    </a>
                ) : (
                    <p className="bg-gray-500 cursor-not-allowed transition-all duration-300 text-center py-2">
                        <span className="text-sm text-white line-through">
                            前の問題
                        </span>
                    </p>
                )}
                {nextWorkId ? (
                    <a
                        href={`/workbook/${nextWorkId}`}
                        className="bg-blue-700 hover:bg-opacity-80 transition-all duration-300 text-center py-2"
                    >
                        <span className="text-sm text-white">次の問題</span>
                    </a>
                ) : (
                    <p className="bg-gray-500 cursor-not-allowed transition-all duration-300 text-center py-2">
                        <span className="text-sm text-white line-through">
                            次の問題
                        </span>
                    </p>
                )}
            </div>
        </main>
    );
}
