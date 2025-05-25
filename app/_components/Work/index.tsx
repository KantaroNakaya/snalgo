import type { Work } from "@/app/_libs/microcms";
import styles from "./index.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    data: Work;
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
                    {data.templateCode ?? ""}
                </SyntaxHighlighter>
            </div>
            <div className={styles.answerCode}>
                <h2 className={styles.answerCodeTitle}>回答コード01</h2>
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {data.answerCode01 ?? ""}
                </SyntaxHighlighter>
            </div>
            {data.answerCode02 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード02</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {data.answerCode02}
                    </SyntaxHighlighter>
                </div>
            )}
            {data.answerCode03 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード03</h2>
                    <SyntaxHighlighter language="javascript" style={tomorrow}>
                        {data.answerCode03}
                    </SyntaxHighlighter>
                </div>
            )}
        </main>
    );
}
