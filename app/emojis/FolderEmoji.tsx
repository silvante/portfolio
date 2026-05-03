import Image from "next/image";
import Folder from "@/app/assets/emojis/folder.png"

export default function FolderEmoji() {
    return <Image src={Folder} alt="Home emoji" width={0} height={0} className={`aspect-square object-cover shrink-0 size-5`} />
}