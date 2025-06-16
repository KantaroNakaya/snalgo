"use client";

import TopHero from "./_components/TopHero";
import ButtonLink from "./_components/ButtonLink";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
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
            <section>
                <p className="max-w-3xl mx-auto py-4 text-center">
                    <span className="text-2xl font-bold">
                        隙間時間を使って
                        <br />
                        「アルゴリズムを考える力」
                        <br />
                        を鍛えよう
                    </span>
                </p>
                <Image
                    className="mx-auto"
                    src="/illust.png"
                    alt=""
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-8 max-w-xl mx-auto px-10 py-8">
                    <TypeAnimation
                        sequence={(() => {
                            const texts = [
                                "腰を据えてプログラムを考える。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、「Snalgo」です。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、「Snalgo」です。このサイトは、スマホでサクッと学べるようになっています。",
                                "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、「Snalgo」です。このサイトは、スマホでサクッと学べるようになっています。\n\nSnalgoを使ってアルゴリズムを考えてみよう。",
                            ];

                            return texts.flatMap((text, index) => [
                                text,
                                index < texts.length - 1 ? 1000 : 2000,
                            ]);
                        })()}
                        wrapper="p"
                        speed={50}
                        className="text-2xl font-bold whitespace-pre-line"
                        repeat={0}
                    />
                </div>
            </section>
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
