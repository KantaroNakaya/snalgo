import Image from "next/image";
import { formatDate } from "@/app/_libs/utils";

type Props = {
    date: string;
};

export default function Date({ date }: Props) {
    return (
        <span className="inline-flex items-center gap-2">
            <Image
                src="/clock.svg"
                alt=""
                width={16}
                height={16}
                loading="eager"
            />
            {formatDate(date)}
        </span>
    );
}
