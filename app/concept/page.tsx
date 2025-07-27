import ButtonLink from "@/app/_components/ButtonLink";
import ConceptAccordion from "@/app/_components/ConceptAccordion";

export default function Page() {
    const content = [
        {
            title: "サービスコンセプト",
            items: [
                "Snalgoは「スマホでアルゴリズムの基礎を学ぶためのサービス」です。",
                "問題を読み、アルゴリズムを考えることを繰り返して、アルゴリズムの基礎力を培うことができます。",
                "実際にソースコードを書くのは時間とパソコンがあるときに行いましょう。",
            ],
        },
        {
            title: "こんな人におすすめ",
            items: [
                "・基本的な文法は学び終えた人",
                "・文法知識を使ってアルゴリズムを考えたい人",
                "・日常に潜む隙間時間を有効活用したい人",
            ],
        },
        {
            title: "おすすめの使い方",
            items: [
                "イメージは数研出版さんの「チャート式」です。",
                "・答えが頭に浮かばなかったら解答コードを読んで理解し、次に活かす。",
                "・解答コードを読んで理解したら、次に自分でアルゴリズムを考えてみる。",
                "これを繰り返すことで、アルゴリズムの基礎力を培うことができます。",
            ],
        },
        {
            title: "解答コード01について",
            items: [
                "自らアルゴリズムを考えることを促すヒントと解答を用意しています。",
                "アルゴリズムの基礎力を培うことができます。",
            ],
        },
        {
            title: "解答コード02と03について",
            items: [
                "メソッドを用いて簡略なソースコードで実装できる解答を用意しています。",
                "メソッドの便利さを実感することができます。",
            ],
        },
    ];

    return (
        <div className="max-w-2xl mx-auto">
            {content.map((section, index) => (
                <ConceptAccordion
                    key={index}
                    title={section.title}
                    items={section.items}
                    index={index}
                />
            ))}
            <ButtonLink href="/workbook">問題一覧へ</ButtonLink>
        </div>
    );
}
