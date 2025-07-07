import Image from "next/image";

export default function Navbar() {
    return (
        <div className="pl-14 py-7 flex justify-between items-center mx-auto w-full">
            <a href="/" className="flex items-center">
                <Image src="/logo.png" alt="Logo" className="mr-2" height={50} width={50}/>
                <span className="text-2xl leading-none">
                    crescentis
                </span>
            </a>
            <div className="flex justify-center items-center pr-7">
                <a href="#" className="mr-6 hover:text-gray-500 transition-colors">contact us</a>
                <a href="#" className="hover:text-gray-500 transition-colors">Log in</a>
            </div>
        </div>
    );
}