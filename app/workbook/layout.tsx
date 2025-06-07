import Sheet from "@/app/_components/Sheet";

export const metadata = {
    title: "Workbook",
};

type Props = {
    children: React.ReactNode;
};

export const revalidate = 60;

export default function WorkbookLayout({ children }: Props) {
    return (
        <>
            <Sheet>{children}</Sheet>
        </>
    );
}
