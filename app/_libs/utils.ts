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
            frameworks: ["JavaScript(Vanilla)", "React"],
        },
        { language: "PHP", frameworks: ["PHP(Vanilla)", "Laravel"] },
    ];
};

export const getLanguageFrameworkLabel = (
    language: string,
    framework: string
) => {
    return `${language} (${framework})`;
};

export const frameworkSlugMap: Record<string, string> = {
    "JavaScript(Vanilla)": "javascript-vanilla",
    React: "react",
    Laravel: "laravel",
    "PHP(Vanilla)": "php-vanilla",
};

export function frameworkToSlug(framework: string): string {
    return (
        frameworkSlugMap[framework] ||
        framework.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    );
}

export function slugToFramework(slug: string): string {
    const entry = Object.entries(frameworkSlugMap).find(([, v]) => v === slug);
    return entry ? entry[0] : slug;
}
