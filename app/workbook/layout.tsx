import Hero from "@/app/_components/Hero";
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
            <Hero title="Workbook" sub="ワークブック" />
            <Sheet>{children}</Sheet>
        </>
    );
}
