import type { Work } from "@/app/_libs/microcms";
import styles from "./index.module.css";

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
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.templateCode ?? "",
                    }}
                ></p>
            </div>
            <div className={styles.answerCode}>
                <h2 className={styles.answerCodeTitle}>回答コード01</h2>
                <p
                    dangerouslySetInnerHTML={{
                        __html: data.answerCode01 ?? "",
                    }}
                ></p>
            </div>
            {data.answerCode02 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード02</h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.answerCode02,
                        }}
                    ></p>
                </div>
            )}
            {data.answerCode03 && (
                <div className={styles.answerCode}>
                    <h2 className={styles.answerCodeTitle}>回答コード03</h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.answerCode03,
                        }}
                    ></p>
                </div>
            )}
        </main>
    );
}
