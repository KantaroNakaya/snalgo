"use client";

import ButtonLink from "./_components/ButtonLink";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <div>
            <section className="flex items-center justify-center overflow-hidden py-40">
                <div>
                    <div className="text-center">
                        <h1 className="block text-6xl font-bold mb-4">
                            AlgoSnap
                        </h1>
                        <p className="block text-2xl">JavaScript編</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="max-w-3xl mx-auto py-4 text-center">
                    <span className="text-2xl font-bold">
                        スマホでサクッと学べる
                    </span>
                    <br />
                    <span className="text-2xl font-bold">
                        アルゴリズム基礎ドリル
                    </span>
                </p>
                <Image
                    className="mx-auto"
                    src="/illust.png"
                    alt=""
                    width={300}
                    height={300}
                />
                <div className="flex flex-col gap-8 max-w-xl mx-auto px-10 py-16">
                    <TypeAnimation
                        sequence={[
                            "腰を据えてプログラムを考える。",
                            1000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。",
                            1000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。",
                            1000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。",
                            1000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、AlgoSnapです。",
                            2000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、AlgoSnapです。このサイトは、スマホでサクッと学べるようになっています。",
                            2000,
                            "腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。\n\nしかし、腰を据えていない時間もある。その時間を有効活用したい。\n\nそんな時におすすめなのが、AlgoSnapです。このサイトは、スマホでサクッと学べるようになっています。\n\nJavaスクリプトを使ってアルゴリズムを考えてみよう。",
                            2000,
                        ]}
                        wrapper="p"
                        speed={50}
                        className="text-2xl font-bold whitespace-pre-line"
                        repeat={0}
                    />
                </div>
            </section>
            <section className="flex flex-col items-center p-6">
                <ButtonLink href="/concept">コンセプト</ButtonLink>
                <ButtonLink href="/workbook">問題一覧</ButtonLink>
                <ButtonLink href="/news">お知らせ一覧</ButtonLink>
            </section>
        </div>
    );
}
