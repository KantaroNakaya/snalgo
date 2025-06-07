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
    const [isAnswerHowtoOpen, setIsAnswerHowtoOpen] = useState(false);
    const [isAnswerAboutOpen, setIsAnswerAboutOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <main className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">{data.title}</h1>
            <div className="mb-8">
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
            <div
                className="mb-4 border border-white-400 p-2 rounded-md cursor-pointer"
                onClick={() => setIsAnswerHowtoOpen(!isAnswerHowtoOpen)}
            >
                <h2 className="text-l font-bold flex justify-between items-center">
                    解答方法について
                    <span className="text-sm">
                        {isAnswerHowtoOpen ? "▲" : "▼"}
                    </span>
                </h2>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isAnswerHowtoOpen ? "max-h-40" : "max-h-0"
                    }`}
                >
                    <ul className="text-sm text-white-400 mt-4">
                        <li className="py-2">
                            解答テンプレートの「ここに書くコードを考えてください」に当てはまるコードを考えてください。
                        </li>
                        <li className="py-2">
                            繰り返し取り組むことで考え方の型を身につけることができます。
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="mb-4 border border-white-400 p-2 rounded-md cursor-pointer"
                onClick={() => setIsAnswerAboutOpen(!isAnswerAboutOpen)}
            >
                <h2 className="text-l font-bold flex justify-between items-center">
                    解答コードについて
                    <span className="text-sm">
                        {isAnswerAboutOpen ? "▲" : "▼"}
                    </span>
                </h2>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isAnswerAboutOpen ? "max-h-40" : "max-h-0"
                    }`}
                >
                    <ul className="text-sm text-white-400 mt-4">
                        <li className="py-2">
                            解答コード01では、自らアルゴリズムを考えることを促すヒントと解答を用意しています。
                        </li>
                        <li className="py-2">
                            解答コード02や03では、メソッドを用いて簡略なソースコードで実装できる解答を用意しています。
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mb-16">
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
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                {prevWorkId && (
                    <a
                        href={`/workbook/${prevWorkId}`}
                        className="bg-blue-700 text-white hover:bg-opacity-80 transition-all duration-300 text-center py-2"
                    >
                        前の問題
                    </a>
                )}
                {nextWorkId && (
                    <a
                        href={`/workbook/${nextWorkId}`}
                        className="bg-blue-700 text-white hover:bg-opacity-80 transition-all duration-300 text-center py-2"
                    >
                        次の問題
                    </a>
                )}
            </div>
        </main>
    );
}
