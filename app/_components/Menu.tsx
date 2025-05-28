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
                className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-8">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={onClose}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/news"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={onClose}
                        >
                            NEWS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/works"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={onClose}
                        >
                            WORKS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-gray-900"
                            onClick={onClose}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
                <button
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
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
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={open}
            >
                <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
            </button>
        </div>
    );
}
