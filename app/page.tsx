"use client";

import TopHero from "./_components/TopHero";
import TopMessage from "./_components/TopMessage";
import ButtonLink from "./_components/ButtonLink";
import { useState, useEffect } from "react";

export default function Home() {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
        }, 15000); // アニメーションの合計時間より少し長めに設定

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <TopHero />
            <TopMessage />
            {isAnimationComplete && (
                <section className="flex flex-col items-center p-6 opacity-0 animate-fade-in">
                    <ButtonLink href="/concept">コンセプト</ButtonLink>
                    <ButtonLink href="/workbook">問題一覧</ButtonLink>
                    <ButtonLink href="/news">お知らせ一覧</ButtonLink>
                </section>
            )}
        </div>
    );
}
