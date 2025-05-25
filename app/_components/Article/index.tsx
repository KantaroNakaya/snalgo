import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content ?? "",
                }}
            ></div>
        </main>
    );
}
