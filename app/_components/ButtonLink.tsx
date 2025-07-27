import Link from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <div className="flex justify-center mt-8">
            <Link
                href={href}
                className="block w-80 bg-blue-700 text-white hover:bg-opacity-80 transition-all duration-300 py-2 text-center"
            >
                {children}
            </Link>
        </div>
    );
}
