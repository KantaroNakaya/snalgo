import styles from "./index.module.css";
import {Work} from "@/app/_libs/microcms";
import Link from "next/link";

type Props ={
    workbook: Work[];
}

export default function Workbook({workbook}:Props){
    if(workbook.length === 0){
        return <p>問題がありません。</p>;
    }
    return(
        <ul>
            {workbook.map((work) =>(
                <li key={work.id} className={styles.list}>
                    <Link href={`/workbook/${work.id}`} className={styles.link}>
                        <dl className={styles.content}>
                            <dt className={styles.title}>
                                {work.title}
                            </dt>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    )
}