"use client";

import { useState, useEffect } from "react";
import WorkList from "@/app/_components/WorkList";
import Pagination from "@/app/_components/Pagination";
import Hero from "@/app/_components/Hero";
import Howto from "@/app/_components/Howto";
import FrameworkNavigation from "@/app/_components/FrameworkNavigation";

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

const ITEMS_PER_PAGE = 10;

export default function Page() {
    const [workbook, setWorkbook] = useState<Work[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchAllWorkbook = async () => {
            try {
                const response = await fetch(`/api/workbook?limit=100`);
                if (!response.ok) {
                    throw new Error("ワークブックの取得に失敗しました");
                }
                const data = await response.json();
                console.log("取得されたデータ:", data);
                setWorkbook(data.contents);
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

        fetchAllWorkbook();
    }, []);

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

    return (
        <>
            <Hero title="Workbook" sub="ワークブック" />
            <Howto />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md">
                        <div className="text-red-800">
                            <strong>エラー:</strong> {error}
                        </div>
                    </div>
                )}

                <FrameworkNavigation />
            </div>
        </>
    );
}
