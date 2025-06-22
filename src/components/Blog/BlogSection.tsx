export default function BlogSection() {
    return <div className="grid grid-cols-2 gap-14 px-20">
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
        <Card imageUrl="https://www.noon.ai/assets/business-handshake.jpeg" author="Ayush" title="How to hire engineers for your startup (2023)" redirect="#"/>
    </div>
}


function Card({imageUrl, author, title, redirect} : {
    imageUrl : string, 
    author : string, 
    title : string
    redirect : string
}) {
    return <div className="flex flex-col">
        <div className="border rounded-[24px] overflow-hidden cursor-pointer border-transparent">
            <img src={imageUrl} alt="h-[340px] w-full blog-image" />
        </div>
        <div className="text-center pt-4 font-mono">
            {author}
        </div>
        <div className="text-center font-mono text-2xl">
            {title}
        </div>
    </div>
}