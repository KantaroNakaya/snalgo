"use client";

import { useState, useEffect } from "react";
import WorkList from "@/app/_components/WorkList";
import Pagination from "@/app/_components/Pagination";
import Hero from "@/app/_components/Hero";
import FrameworkNavigation from "@/app/_components/FrameworkNavigation";
import { slugToFramework } from "@/app/_libs/utils";

// ローカルでWork型を定義（MicroCMSの型と互換性を保つ）
interface Work {
    id: string;
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
    createdAt: string;
    updatedAt: string;
}

type Props = {
    params: {
        framework: string;
    };
};

const ITEMS_PER_PAGE = 10;

export default function FrameworkPage({ params }: Props) {
    const [workbook, setWorkbook] = useState<Work[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    // URLのスラッグをMicroCMSの値に変換
    const framework = slugToFramework(decodeURIComponent(params.framework));

    useEffect(() => {
        const fetchWorkbookByFramework = async () => {
            try {
                const response = await fetch(`/api/workbook?limit=100`);
                if (!response.ok) {
                    throw new Error("ワークブックの取得に失敗しました");
                }
                const data = await response.json();

                // ここでデータを出力
                console.log("APIから取得したデータ:", data.contents);

                const filteredWorkbook = data.contents.filter((work: Work) => {
                    if (Array.isArray(work.framework)) {
                        return work.framework.includes(framework);
                    }
                    return work.framework === framework;
                });

                setWorkbook(filteredWorkbook);
                setError("");
            } catch (error) {
                console.error("ワークブックの取得に失敗しました:", error);
                setError(
                    "データの取得に失敗しました。しばらく時間をおいて再度お試しください。"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchWorkbookByFramework();
    }, [framework]);

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return workbook.slice(startIndex, endIndex);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) {
        return (
            <>
                <Hero title="Workbook" sub="ワークブック" />
                <div className="flex justify-center items-center py-20">
                    <div className="text-lg">読み込み中...</div>
                </div>
            </>
        );
    }

    const currentPageData = getCurrentPageData();
    const totalPages = Math.ceil(workbook.length / ITEMS_PER_PAGE);

    return (
        <>
            <Hero title="Workbook" sub="ワークブック" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md">
                        <div className="text-red-800">
                            <strong>エラー:</strong> {error}
                        </div>
                    </div>
                )}

                <FrameworkNavigation />

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                        {framework} <br />
                        の問題一覧
                    </h2>
                    {workbook.length > 0 && (
                        <div className="text-sm text-text-primary text-right">
                            <span>{workbook.length}件</span>
                            <span className="ml-4">
                                (ページ {currentPage} / {totalPages})
                            </span>
                        </div>
                    )}
                </div>

                {currentPageData.length > 0 ? (
                    <>
                        <WorkList workbook={currentPageData} />
                        {totalPages > 1 && (
                            <Pagination
                                totalCount={workbook.length}
                                currentPage={currentPage}
                                perPage={ITEMS_PER_PAGE}
                                basePath={`/workbook/framework/${encodeURIComponent(
                                    framework
                                )}`}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-lg text-text-primary mb-4">
                            {error
                                ? "データの取得に失敗しました"
                                : `${framework} の問題が見つかりませんでした`}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
