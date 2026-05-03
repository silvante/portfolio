import Image from "next/image";
import Case from "@/app/assets/emojis/case.png"

export default function CaseEmoji() {
    return <Image src={Case} alt="Home emoji" width={0} height={0} className={`aspect-square object-cover shrink-0 size-5`} />
}