type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
    return (
        <a
            href={href}
            className="block bg-blue-700 text-white hover:bg-opacity-80 transition-all duration-300 py-2"
        >
            {children}
        </a>
    );
}
