"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Howto() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full mb-16 border border-border-light p-4 text-center">
            <p className="mb-4 text-left">
                こちらのページをホーム画面に追加しておくと、手軽に学習を続けられるようになります。
            </p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex items-center justify-between bg-bg-sub2 px-4 py-2 rounded-md text-text-sub"
            >
                <p>ホーム画面に追加する方法</p>
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    ▼
                </span>
            </button>
            {isOpen && (
                <div>
                    <div className="flex flex-col gap-4 mb-4 pt-4">
                        <Link
                            className="flex items-center justify-center gap-2 px-4 py-2 underline"
                            href="https://youtube.com/shorts/5z6h77x958M?si=dd_EKrmIarRyREKF"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-sm">Androidスマホでの追加方法</span>
                            <Image
                                src="/icon-youtube.png"
                                alt="youtube"
                                width={16}
                                height={16}
                            />
                        </Link>
                        <Link
                            className="flex items-center justify-center gap-2 px-4 py-2 underline"
                            href="https://youtube.com/shorts/0pblK9BD6Ec?si=SCOVE-546iJAM-9O"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-sm">iPhoneでの追加方法</span>
                            <Image
                                src="/icon-youtube.png"
                                alt="youtube"
                                width={16}
                                height={16}
                            />
                        </Link>
                    </div>
                    <ul className="text-left text-xs leading-relaxed">
                        <li>※ リンク先はオススメのショート動画です。</li>
                        <li>※ Snalgo運営による制作動画ではありません。</li>
                    </ul>
                </div>
            )}
        </section>
    );
}
