import Image from "next/image";
import Mail from "@/app/assets/emojis/mail.png"

export default function MailEmoji() {
    return <Image src={Mail} alt="Home emoji" width={0} height={0} className={`aspect-square object-cover shrink-0 size-5`} />
}