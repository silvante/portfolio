import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/marketting/logo.svg";
import Nav from "@/app/(components)/Nav";
import MobileSidebar from "@/app/(components)/MobileSidebar";

export default function Header() {
    return (
        <header className="w-full sticky top-0 left-0 z-40 bg-white/80 backdrop-blur-lg">

            {/* Logo section */}
            <section className="py-4 flex justify-center items-center">
                <Link href="/" className="flex justify-center">
                    <Image
                        src={logo}
                        alt="Xamidov And Associates Logo"
                        width={220}
                        priority
                    />
                </Link>
            </section>

            {/* Navigation section */}
            <nav className="w-full bg-gray-500/10">
                <div className="container mx-auto h-12 flex justify-center items-center">

                    <div className="hidden md:flex items-center">
                        <Nav />
                    </div>

                    <div className="md:hidden">
                        <MobileSidebar />
                    </div>

                </div>
            </nav>

        </header>
    );
}