type Props = {
    children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
    return (
        <div className="max-w-2xl mx-auto p-6">
            {children}
        </div>
    );
}
