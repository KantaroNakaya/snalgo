"use client";

import Link from "next/link";
import { getAvailableLanguages, languageToSlug } from "@/app/_libs/utils";
import { usePathname } from "next/navigation";

export default function LanguageNavigation() {
    const pathname = usePathname();
    const availableLanguages = getAvailableLanguages();

    return (
        <div className="mb-16 border border-gray-200 p-4 rounded-md">
            <h3 className="text-lg md:text-center font-semibold text-text-primary mb-4">
                言語を選択
            </h3>
            <div className="grid grid-cols-1 md:text-center gap-4">
                {availableLanguages.map((language) => {
                    const slug = languageToSlug(language);
                    const isActive = pathname === `/workbook/language/${slug}`;
                    return (
                        <Link
                            key={language}
                            href={`/workbook/language/${slug}`}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                isActive
                                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                                    : "hover:bg-gray-50 border border-transparent"
                            }`}
                        >
                            {language}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
