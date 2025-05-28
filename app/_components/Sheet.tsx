type Props = {
    children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {children}
        </div>
    );
}
