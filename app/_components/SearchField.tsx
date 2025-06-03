"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchFieldComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            router.push(`/workbook/search?${params.toString()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="relative block">
                <Image
                    src="/search.svg"
                    alt="検索"
                    width={16}
                    height={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--color-text-sub)]"
                />
            </label>
        </form>
    );
}

export default function SearchField() {
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}
