"use client";

import ButtonLink from "./ButtonLink";

export default function TopButtons() {
    return (
        <>
            <section className="flex flex-col items-center pb-6 opacity-0 animate-fade-in">
                <ButtonLink href="/concept">コンセプト</ButtonLink>
                <ButtonLink href="/workbook">問題一覧</ButtonLink>
                <ButtonLink href="/news">お知らせ一覧</ButtonLink>
            </section>
        </>
    );
}