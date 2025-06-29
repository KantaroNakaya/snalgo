import Image from "next/image";

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
            <div className="flex flex-col gap-8 max-w-xl mx-auto mb-8 px-10 text-2xl font-bold">
                <p>腰を据えてプログラムを考える。もちろんそれは大事なことであり、欠かせないことである。</p>
                <p>しかし、腰を据えていない時間もある。その時間を有効活用したい。そんな時におすすめなのが、「Snalgo」です。</p>
                <p>このサイトは、スマホでサクッと学べるようになっています。Snalgoを使ってアルゴリズムを考えてみよう。</p>
            </div>
        </section>
    );
}
