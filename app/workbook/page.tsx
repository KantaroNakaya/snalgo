import { getWorkList } from "@/app/_libs/microcms";
import WorkList from "@/app/_components/WorkList";
import Hero from "@/app/_components/Hero";
import Howto from "@/app/_components/Howto";
import FrameworkNavigation from "@/app/_components/FrameworkNavigation";
import { WORKBOOK_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 60; // 60秒ごとに再検証

export default async function Page() {
    try {
        const { contents: workbook, totalCount } = await getWorkList({
            limit: 100,
        });

        return (
            <>
                <Hero title="Workbook" sub="ワークブック" />
                <Howto />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <FrameworkNavigation />
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
