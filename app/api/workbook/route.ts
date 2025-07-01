import { NextResponse } from "next/server";
import { getWorkList } from "@/app/_libs/microcms";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const limit = searchParams.get("limit");
        const offset = searchParams.get("offset");

        const queries: any = {};
        if (limit) {
            queries.limit = parseInt(limit);
        } else {
            // デフォルトで10件取得
            queries.limit = 10;
        }

        if (offset) {
            queries.offset = parseInt(offset);
        }

        console.log("APIルート - クエリ:", queries); // デバッグ用

        const data = await getWorkList(queries);

        console.log(
            "APIルート - 取得されたデータ数:",
            data.contents?.length || 0
        ); // デバッグ用
        console.log("APIルート - 総数:", data.totalCount); // デバッグ用

        return NextResponse.json(data);
    } catch (error) {
        console.error("ワークブック取得エラー:", error);
        return NextResponse.json(
            { error: "ワークブックの取得に失敗しました" },
            { status: 500 }
        );
    }
}
