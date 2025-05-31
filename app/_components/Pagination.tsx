import Link from "next/link";

type Props = {
    totalCount: number;
    currentPage: number;
    perPage: number;
};

export default function Pagination({
    totalCount,
    currentPage,
    perPage,
}: Props) {
    const range = (start: number, end: number) => {
        if (start > end) return [];
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const pages = Math.ceil(totalCount / perPage);
    const pageNumbers = range(1, pages);

    return (
        <ul className="flex justify-center gap-2 mt-8">
            {pageNumbers.map((page) => (
                <li key={page}>
                    <Link
                        href={`/news/page/${page}`}
                        className={`block w-10 h-10 leading-10 text-center border rounded ${
                            currentPage === page
                                ? "bg-gray-900 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
