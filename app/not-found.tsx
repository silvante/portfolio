import Link from "next/link";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import m404 from "./assets/404.png";

export default function NotFound() {
  return (
    <div className="shell page">
      <div className="flex min-h-[58vh] flex-col items-center justify-center gap-7 text-center">
        <Image
          src={m404}
          alt=""
          width={560}
          className="h-auto w-56 sm:w-72"
          priority
        />

        <p className="eyebrow">
          <span className="base_bg block size-1.5" />
          Xato 404
        </p>

        <h1 className="max-w-2xl text-display">
          Sahifa topilmadi<span className="dot">.</span>
        </h1>

        <p className="lead max-w-md">
          Siz izlagan sahifa o&apos;chirilgan yoki manzili o&apos;zgargan
          bo&apos;lishi mumkin.
        </p>

        <Link href="/" className="base_btn mt-2">
          <MoveLeft className="size-4" />
          Bosh sahifa
        </Link>
      </div>
    </div>
  );
}
