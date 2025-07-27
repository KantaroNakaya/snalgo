import { MetadataRoute } from 'next';
import { getAllNewsList } from './_libs/microcms';
import { frameworkSlugMap } from './_libs/utils';

const buildurl = (path?: string) => `https://snalgo.com${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const newsContents = await getAllNewsList();

    const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
        url: buildurl(`/news/${content.id}`),
        lastModified: content.revisedAt,
    }));

    // フレームワークページのURLを生成
    const frameworkUrls: MetadataRoute.Sitemap = Object.values(
        frameworkSlugMap
    ).map((slug) => ({
        url: buildurl(`/workbook/framework/${slug}`),
        lastModified: new Date(),
    }));

    const now = new Date();

    return [
        {
            url: buildurl(),
            lastModified: now,
        },
        {
            url: buildurl('/concept'),
            lastModified: now,
        },
        {
            url: buildurl('/workbook'),
            lastModified: now,
        },
        {
            url: buildurl('/news'),
            lastModified: now,
        },
        {
            url: buildurl('/contact'),
            lastModified: now,
        },
        ...frameworkUrls,
        ...newsUrls,
    ];
}
