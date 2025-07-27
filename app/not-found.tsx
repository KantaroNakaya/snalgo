import Image from "next/image";

export default function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
            <Image
                className="animate-head-wiggle"
                src="/illust.png"
                alt=""
                width={300}
                height={300}
            />
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
