import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("ja-JP");
};

export const getAvailableLanguages = () => {
    return [
        {
            language: "JavaScript",
            frameworks: ["JavaScript"],
        },
        { language: "PHP", frameworks: ["PHP"] },
    ];
};


export const languageSlugMap: Record<string, string> = {
    "JavaScript": "javascript",
    "PHP": "php",
};

export function languageToSlug(language: string): string {
    return (
        languageSlugMap[language] ||
        language.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );
}

export function slugToLanguage(slug: string): string {
    const entry = Object.entries(languageSlugMap).find(([, v]) => v === slug);
    return entry ? entry[0] : slug;
}
