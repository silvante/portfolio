import Link from "next/link";
import {MoveLeft} from "lucide-react";
import Image from "next/image";
import m404 from "./assets/404.png";

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex flex-col items-center justify-center space-y-5 text-center">
            <Image src={m404} alt={"404 image"} className="w-72" width={200} />

            <p className="text-6xl font-bold">Page not found.</p>

            <Link
                href="/"
                className="text-lg base_text flex items-center gap-2"
            >
                <MoveLeft /> Go home
            </Link>
        </main>
    );
}