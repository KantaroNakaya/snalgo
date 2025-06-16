import { Iceland } from "next/font/google";

const iceland = Iceland({
    weight: "400",
    subsets: ["latin"],
});

export default function TopHero() {
    return (
        <section className="flex items-center justify-center overflow-hidden py-40">
            <div>
                <div className="text-center">
                    <h1
                        className={`block text-7xl font-bold mb-4 ${iceland.className}`}
                    >
                        Snalgo
                    </h1>
                    <p className="block text-xl font-bold">
                        スマホで取り組める
                        <br />
                        プログラミング学習ドリル
                    </p>
                </div>
            </div>
        </section>
    );
}
