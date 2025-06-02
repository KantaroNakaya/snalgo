import Image from "next/image";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const SyntaxHighlighter = dynamic(
    () => import("react-syntax-highlighter").then((mod) => mod.Prism),
    { ssr: false }
);

type AnswerCodeProps = {
    number: number;
    code: string | null | undefined;
    description: string | null | undefined;
};

// HTMLタグを除去し、<br>やエスケープされたタグを改行に変換する関数
const cleanCode = (code: string | null | undefined): string => {
    if (!code) return "";
    return code.replace(/\\n/g, "\n");
};

export default function AnswerCode({
    number,
    code,
    description,
}: AnswerCodeProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!code) return null;

    return (
        <div className="mb-16">
            <h2 className="text-xl font-bold mb-4">
                解答コード{String(number).padStart(2, "0")}
            </h2>
            <div className="mb-8 border-l-4 border-primary">
                <p className="flex items-center gap-1">
                    <Image src="/icon-hint.png" alt="" width={40} height={40} />
                    <span className="text-sm font-bold">ヒント</span>
                </p>
                <p className="pl-4 mt-4">{description}</p>
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-bg-sub text-text-sub mb-4 px-4 py-2 rounded-md transition-all duration-300 hover:bg-opacity-80"
            >
                {isOpen ? "答えを隠す" : "答えを確認する"}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(code)}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
