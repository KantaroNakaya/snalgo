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
    language: string;
    framework: string;
    templateCode: string;
    answer01_code: string;
    answer01_hint: string;
    answer01_desc: string;
    answer02_code: string;
    answer02_hint: string;
    answer02_desc: string;
    answer03_code: string;
    answer03_hint: string;
    answer03_desc: string;
} & MicroCMSListContent;

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client = createClient({
    serviceDomain: serviceDomain || "dummy-domain",
    apiKey: apiKey || "dummy-key",
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

    const listData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return listData;
};

export const getWorkList = async (queries?: MicroCMSQueries) => {
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

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
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

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
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

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
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

    const listData = await client.getAllContents<News>({
        endpoint: "news",
    });
    return listData;
};

export const getAllWorkList = async () => {
    if (!serviceDomain || !apiKey) {
        throw new Error("MicroCMS credentials are not configured");
    }

    const listData = await client.getAllContents<Work>({
        endpoint: "workbook",
    });
    return listData;
};
