import ButtonLink from "@/app/_components/ButtonLink";

export default function Page() {
    const content = [
        {
            title: "サービスコンセプト",
            items: [
                "Snalgoは「スマホでアルゴリズムの基礎を学ぶためのサービス」です。",
                "・文法は学び終えたけど、アルゴリズムを考える力が身についていない",
                "・日常に潜む隙間時間を有効活用してアルゴリズムを考えたい",
                "そんな方におすすめなのが、「Snalgo」です。",
            ],
        },
        {
            title: "解答コードについて",
            items: [
                "解答コード01では、自らアルゴリズムを考えることを促すヒントと解答を用意しています。",
                "解答コード02や03では、メソッドを用いて簡略なソースコードで実装できる解答を用意しています。",
                "自らアルゴリズムを考えることで、アルゴリズムの基礎力を培うとともに、メソッドの便利さを実感できるでしょう。",
            ],
        },
    ];

    return (
        <div className="max-w-2xl mx-auto p-6">
            {content.map((section, index) => (
                <section key={index} className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        {section.title}
                    </h2>
                    <ul className="flex flex-col gap-8 mb-10 text-xl font-bold">
                        {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
            <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
        </div>
    );
}
