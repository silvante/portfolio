import Image from "next/image";
import Home from "@/app/assets/emojis/home.png"

export default function HomeEmoji() {
    return <Image src={Home} alt="Home emoji" width={0} height={0} className={`aspect-square object-cover shrink-0 size-5`} />
}