import ButtonLink from "./_components/ButtonLink";
import Image from "next/image";
export const revalidate = 60;

export default async function Home() {
    return (
        <div>
            <section className="flex items-center justify-center overflow-hidden py-32">
                <div>
                    <h1 className="text-5xl text-center">
                        <span className="block font-bold mb-4 text-6xl md:text-4xl">
                            AlgoSnap
                        </span>
                        <span className="block text-xl md:text-xl">
                            JavaScript編
                        </span>
                    </h1>
                </div>
            </section>
            <section>
                <p className="max-w-3xl mx-auto px-10 py-8 text-center">
                    <span className="text-2xl font-bold">スマホでサクッと学べる</span><br />
                    <span className="text-2xl font-bold">アルゴリズム基礎ドリル</span>
                </p>
                <div className="max-w-3xl mx-auto px-10 py-8">
                    <Image src="/illust.png" alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col gap-8 max-w-3xl mx-auto px-10 py-16">
                    <p className="text-2xl font-bold">腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。</p>
                    <p className="text-2xl font-bold">しかし、腰を据えていない時間もある。その時間を有効活用したい。</p>
                    <p className="text-2xl font-bold">そんな時におすすめなのが、AlgoSnapです。</p>
                </div>
            </section>
            <section className="flex flex-col items-center gap-4 p-6">
                <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
                <ButtonLink href="/news">お知らせ一覧へ</ButtonLink>
            </section>
        </div>
    );
}
