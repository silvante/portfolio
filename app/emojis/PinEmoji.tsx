import Image from "next/image";
import Pin from "@/app/assets/emojis/pin.png"

export default function PinEmoji() {
    return <Image src={Pin} alt="Home emoji" width={0} height={0} className={`aspect-square object-cover shrink-0 size-5`} />
}