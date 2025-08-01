import { getWorkList } from "@/app/_libs/microcms";
import WorkList from "@/app/_components/WorkList";
import Pagination from "@/app/_components/Pagination";
import Hero from "@/app/_components/Hero";
import FrameworkNavigation from "@/app/_components/FrameworkNavigation";
import { slugToFramework } from "@/app/_libs/utils";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 60; // 60秒ごとに再検証

type Props = {
    params: {
        framework: string;
    };
    searchParams: {
        page?: string;
    };
};

export default async function FrameworkPage({ params, searchParams }: Props) {
    try {
        // URLのスラッグをMicroCMSの値に変換
        const framework = slugToFramework(decodeURIComponent(params.framework));
        
        // 現在のページを取得
        const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;
        
        // 全データを取得
        const { contents: allWorkbook } = await getWorkList({
            limit: 100,
        });

        // フレームワークでフィルタリング
        const filteredWorkbook = allWorkbook.filter((work) => {
            if (Array.isArray(work.framework)) {
                return work.framework.includes(framework);
            }
            return work.framework === framework;
        });

        // ページネーション処理
        const totalPages = Math.ceil(filteredWorkbook.length / WORKBOOK_LIST_LIMIT);
        const startIndex = (currentPage - 1) * WORKBOOK_LIST_LIMIT;
        const endIndex = startIndex + WORKBOOK_LIST_LIMIT;
        const currentPageData = filteredWorkbook.slice(startIndex, endIndex);

        return (
            <>
                <Hero title="Workbook" sub="ワークブック" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FrameworkNavigation />

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-text-primary mb-4">
                            {framework} <br />
                            の問題一覧
                        </h2>
                        {filteredWorkbook.length > 0 && (
                            <div className="text-sm text-text-primary text-right">
                                <span>{filteredWorkbook.length}件</span>
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
                                    totalCount={filteredWorkbook.length}
                                    currentPage={currentPage}
                                    perPage={WORKBOOK_LIST_LIMIT}
                                    basePath={`/workbook/framework/${encodeURIComponent(
                                        framework
                                    )}`}
                                />
                            )}
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-lg text-text-primary mb-4">
                                {`${framework} の問題が見つかりませんでした`}
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    } catch (error) {
        console.error("ワークブックの取得に失敗しました:", error);
        return (
            <>
                <Hero title="Workbook" sub="ワークブック" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md">
                        <div className="text-red-800">
                            <strong>エラー:</strong> データの取得に失敗しました。しばらく時間をおいて再度お試しください。
                        </div>
                    </div>
                    <FrameworkNavigation />
                </div>
            </>
        );
    }
}
