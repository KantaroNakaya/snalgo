"use client";

import Link from "next/link";

type Props = {
    totalCount: number;
    currentPage: number;
    perPage: number;
    basePath: string;
    onPageChange?: (page: number) => void;
};

export default function Pagination({
    totalCount,
    currentPage,
    perPage,
    basePath,
    onPageChange,
}: Props) {
    const range = (start: number, end: number) => {
        if (start > end) return [];
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    const pages = Math.ceil(totalCount / perPage);
    const pageNumbers = range(1, pages);

    const handlePageClick = (page: number) => {
        if (onPageChange) {
            onPageChange(page);
        }
    };

    return (
        <ul className="flex justify-center gap-2 mt-8">
            {pageNumbers.map((page) => (
                <li key={page}>
                    {onPageChange ? (
                        <button
                            onClick={() => handlePageClick(page)}
                            className={`block w-10 h-10 leading-10 text-center border rounded transition-colors ${
                                currentPage === page
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <Link
                            href={`${basePath}/page/${page}`}
                            className={`block w-10 h-10 leading-10 text-center border rounded ${
                                currentPage === page
                                    ? "bg-gray-900 text-white"
                                    : "text-white hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                            {page}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}
