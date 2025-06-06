import ButtonLink from "@/app/_components/ButtonLink";

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <ul className="flex flex-col gap-4 mb-10 text-xl font-bold">
                <li>AlgoSnapは、アルゴリズムの基礎を学ぶためのサービスです。</li>
                <li>解答コード01では、自らアルゴリズムを考えることを促すヒントと解答を用意しています。</li>
                <li>解答コード02や03では、メソッドを用いて簡略なソースコードで実装できる解答を用意しています。</li>
                <li>自らアルゴリズムを考えることで、アルゴリズムの基礎力を培うとともに、メソッドの便利さを実感できるでしょう。</li>
            </ul>
            <div className="flex justify-center">
                <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
            </div>
        </div>
    );
}
