"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Props = {
    onClose?: () => void;
};

export default function Menu({ onClose }: Props) {
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);

    return (
        <div>
            <nav
                className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-8 bg-bg-sub text-text-sub">
                    <li>
                        <Link
                            href="/"
                            className="hover:bg-bg-main hover:text-text-main p-4"
                            onClick={close}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/workbook"
                            className="hover:bg-bg-main hover:text-text-main p-4"
                            onClick={close}
                        >
                            WORKBOOK
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/news"
                            className="hover:bg-bg-main hover:text-text-main p-4"
                            onClick={close}
                        >
                            NEWS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:bg-bg-main hover:text-text-main p-4"
                            onClick={close}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-bg-sub2"
                    onClick={close}
                >
                    <Image
                        src="/close.svg"
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button
                className="p-2 rounded-full hover:bg-bg-sub"
                onClick={open}
            >
                <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
            </button>
        </div>
    );
}
