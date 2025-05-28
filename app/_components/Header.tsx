import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="block">
                    <Image
                        src="/logo.svg"
                        alt="SIMPLE"
                        className="h-8 w-auto"
                        width={348}
                        height={133}
                        priority
                    />
                </Link>
                <Menu />
            </div>
        </header>
    );
}
