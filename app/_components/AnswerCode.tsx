import Image from "next/image";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    if (!code) return null;

    return (
        <div className="mb-16">
            <h2 className="text-xl font-bold mb-4">
                解答コード{String(number).padStart(2, "0")}
            </h2>
            <div className="mb-4 border-l-4 border-primary">
                <p className="flex items-center gap-1">
                    <Image src="/icon-hint.png" alt="" width={40} height={40} />
                    <span className="text-sm font-bold">ヒント</span>
                </p>
                <p className="pl-4 mt-4">{description}</p>
            </div>
            <SyntaxHighlighter language="javascript" style={tomorrow}>
                {cleanCode(code)}
            </SyntaxHighlighter>
        </div>
    );
}
