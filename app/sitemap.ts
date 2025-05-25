import { MetadataRoute } from "next";
import { getAllNewsList } from "./_libs/microcms";

const buildurl = (path?: string) => `http://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const newsContents = await getAllNewsList();

    const newsUrls: MetadataRoute.Sitemap =
    newsContents.map((content) => ({
        url: buildurl(`/news/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const now = new Date();

    return[
        {
            url: buildurl(),
            lastModified: now,
        },
        {
            url: buildurl("/workbook"),
            lastModified: now,
        },
        {
            url: buildurl("/contact"),
            lastModified: now,
        },
        {
            url: buildurl("/news"),
            lastModified: now,
        },
        ...newsUrls,
    ];
}