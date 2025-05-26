"use client";

import type { Work } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

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
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.description}>
                <h2 className={styles.descriptionTitle}>問題</h2>
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.description ?? "",
                    }}
                ></p>
            </div>
            <div className={styles.templateCode}>
                <h2 className={styles.templateCodeTitle}>解答テンプレート</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.templateCode)}
                </SyntaxHighlighter>
            </div>
            <div className={styles.answerCode}>
                <h2 className={styles.answerCodeTitle}>解答コード01</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.answer01_code)}
                </SyntaxHighlighter>
                <p>{data.answer01_desc}</p>
            </div>
            {data.answer02_code && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>解答コード02</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answer02_code)}
                    </SyntaxHighlighter>
                    <p>{data.answer02_desc}</p>
                </div>
            )}
            {data.answer03_code && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>解答コード02</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answer02_code)}
                    </SyntaxHighlighter>
                    <p>{data.answer02_desc}</p>
                </div>
            )}
        </main>
    );
}
