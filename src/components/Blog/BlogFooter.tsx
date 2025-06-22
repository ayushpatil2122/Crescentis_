import Image from "next/image";

export default function BlogFooter() {
    return <div className= "w-full h-full flex flex-col justify-center relative pt-64">
        <div className="flex justify-between w-[100%] px-52 pb-11">
            <div className="pr-40">
                <a href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" className="mr-2" height={50} width={50}/>
                    <span className="text-2xl leading-none">
                        crescentis
                    </span>
                </a>
            </div>
            <div>
                Links
            </div>
        </div>
        <div className="flex justify-between w-[100%] px-52 pb-11">
            <div className="pr-40">
                <a href="/" className="flex items-center">
                    team@noon.ai
                </a>
            </div>
            <div>
                Terms and Conditions
            </div>
        </div>
        <div className="flex justify-between w-[100%] px-52 pb-11">
            <div className="pr-40">
                <a href="/" className="flex items-center">
                All rights reserved | Portal 2022
                </a>
            </div>
            <div>
                Privacy Policy
            </div>
        </div>
    </div>
}   