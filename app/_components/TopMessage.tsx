"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function TopMessage() {
    return (
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
                className="mx-auto mb-8"
                src="/illust.png"
                alt=""
                width={300}
                height={300}
            />
            <div className="flex flex-col gap-8 max-w-xl mx-auto px-10">
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
                    className="min-h-[80px] pb-16 text-2xl font-bold whitespace-pre-line"
                    repeat={0}
                />
            </div>
        </section>
    );
}
