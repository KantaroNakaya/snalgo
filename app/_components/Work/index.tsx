import type { Work } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    data: Work;
};

// HTMLタグを除去し、<br>やエスケープされたタグを改行に変換する関数
const cleanCode = (code: string | null | undefined): string => {
    if (!code) return "";
    return code
        .replace(/&lt;br\s*\/??&gt;/gi, "\n") // &lt;br&gt; → 改行
        .replace(/&lt;/g, "<") // &lt; → <
        .replace(/&gt;/g, ">") // &gt; → >
        .replace(/<br\s*\/?>/gi, "\n") // <br> → 改行
        .replace(/<[^>]*>/g, "") // その他のHTMLタグを除去
        .trim(); // 前後の空白を削除
};

export default function Work({ data }: Props) {
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
                <h2 className={styles.templateCodeTitle}>回答テンプレート</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.templateCode)}
                </SyntaxHighlighter>
            </div>
            <div className={styles.answerCode}>
                <h2 className={styles.answerCodeTitle}>回答コード01</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {cleanCode(data.answerCode01)}
                </SyntaxHighlighter>
            </div>
            {data.answerCode02 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード02</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answerCode02)}
                    </SyntaxHighlighter>
                </div>
            )}
            {data.answerCode03 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード03</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {cleanCode(data.answerCode03)}
                    </SyntaxHighlighter>
                </div>
            )}
        </main>
    );
}
