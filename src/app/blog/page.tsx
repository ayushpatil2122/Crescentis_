import BlogFooter from "@/components/Blog/BlogFooter";
import BlogHero from "@/components/Blog/BlogHero";
import BlogSection from "@/components/Blog/BlogSection";
import Navbar from "@/components/Blog/Navbar";

export default function blog() {
    return <div>
        <Navbar/>
        <BlogHero/>
        <BlogSection/>
        <BlogFooter/>
    </div>
}