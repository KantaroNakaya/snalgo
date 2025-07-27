export default function NotFound() {
    return (
        <div className="py-20 px-10">
            <dl>
                <dt className="text-2xl text-center font-bold mb-6">
                    ページが見つかりませんでした
                </dt>
                <dd className="text-lg text-center mb-10">
                    あなたがアクセスしようとした
                    <br />
                    ページは存在しません。
                    <br />
                    URLを再度ご確認ください。
                </dd>
            </dl>
        </div>
    );
}
