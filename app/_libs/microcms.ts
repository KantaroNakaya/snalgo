import { createClient } from "microcms-js-sdk";

import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

export type Work = {
    title: string;
    description: string;
    content: string;
    templateCode: string;
    answerCode01: string;
    answerCode02: string;
    answerCode03: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return listData;
};

export const getWorkList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Work>({
        endpoint: "workbook",
        queries,
    });
    return listData;
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: "news",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};

export const getWorkDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Work>({
        endpoint: "workbook",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};

export const getAllNewsList = async () => {
    const listData = await client.getAllContents<News>({
        endpoint: "news",
    });
    return listData;
};

export const getAllWorkList = async () => {
    const listData = await client.getAllContents<Work>({
        endpoint: "workbook",
    });
    return listData;
};
