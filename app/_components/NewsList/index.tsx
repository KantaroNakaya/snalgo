import Image from "next/image";
import styles from "./index.module.css";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/news/${article.id}`} className={styles.link}>
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Date
                                    date={
                                        article.publishedAt ?? article.createdAt
                                    }
                                />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
