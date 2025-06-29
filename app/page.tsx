"use client";

import TopHero from "./_components/TopHero";
import TopMessage from "./_components/TopMessage";
import ButtonLink from "./_components/ButtonLink";
import Footer from "./_components/Footer";

export default function Home() {
    return (
        <div>
            <TopHero />
            <TopMessage />
            <section className="flex flex-col items-center pb-6 opacity-0 animate-fade-in">
                <ButtonLink href="/concept">コンセプト</ButtonLink>
                <ButtonLink href="/workbook">問題一覧</ButtonLink>
                <ButtonLink href="/news">お知らせ一覧</ButtonLink>
            </section>
            <Footer />
        </div>
    );
}
