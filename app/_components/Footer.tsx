import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 mt-16">
            <nav className="max-w-7xl mx-auto px-4">
                <ul className="flex justify-center gap-8 mb-8">
                    <li>
                        <Link
                            href="/news"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            ニュース
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/workbook"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            ドリル
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            お問い合わせ
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-gray-600">
                    © AlgoSnap. All Rights Reserved 2025
                </p>
            </nav>
        </footer>
    );
}
