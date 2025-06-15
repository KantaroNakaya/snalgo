import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full mb-8 border border-border-light p-4 text-center">
            <p className="mb-4 text-left">
                こちらのページをホーム画面に追加しておくと、手軽に学習を続けられるようになります。
            </p>
            <p className="mb-4 text-left">▼ホーム画面に追加する方法</p>
            <div className="flex flex-col gap-4 mb-4">
                <a
                    className="flex items-center justify-center gap-2 bg-green-500 px-4 py-2 rounded-md"
                    href="https://youtube.com/shorts/5z6h77x958M?si=dd_EKrmIarRyREKF"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-sm">AndroidOS版の場合</span>
                    <span className="w-8 h-6">
                        <Image
                            src="/icon-youtube.png"
                            alt="youtube"
                            width={32}
                            height={24}
                        />
                    </span>
                </a>
                <a
                    className="flex items-center justify-center gap-2 bg-green-500 px-4 py-2 rounded-md"
                    href="https://youtube.com/shorts/0pblK9BD6Ec?si=SCOVE-546iJAM-9O"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-sm">iOS版の場合</span>
                    <span className="w-8 h-6">
                        <Image
                            src="/icon-youtube.png"
                            alt="youtube"
                            width={32}
                            height={24}
                        />
                    </span>
                </a>
            </div>
            <ul className="text-left text-xs leading-relaxed">
                <li>※ リンク先はオススメのショート動画です。</li>
                <li>※ Snalgo運営による制作動画ではありません。</li>
            </ul>
        </section>
    );
}
