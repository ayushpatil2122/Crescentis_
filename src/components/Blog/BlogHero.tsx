import Image from "next/image";

export default function BlogHero() {
    return <div className="relative py-14 w-full">
        <div className="text-center">
            <div className="flex justify-center">
                <Image src="/logo.png" height={60} width={100} alt="logo"/>
                <h1 className="text-7xl pl-2">crescentis</h1>
            </div>
            <p className="py-6">
                Keeping up with the most recent trends in talent <br /> acquisition and recruiting
            </p>
            <div className="flex flex-col items-center justify-center pt-4">
                <div className="bg-gray-200 rounded-md w-3/5 " style={{height : "1.5px"}}>
                </div>
            </div>
        </div>
    </div>
}