import NavLink from "../(reusable)/NavLink";
import CaseEmoji from "../emojis/CaseEmoji";
import FolderEmoji from "../emojis/FolderEmoji";
import HomeEmoji from "../emojis/HomeEmoji";
import MailEmoji from "../emojis/MailEmoji";
import PinEmoji from "../emojis/PinEmoji";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-5">
      <div className="space-x-5 flex items-center border border-gray-700 bg-[#0f1115] py-1 px-4 rounded-full max-w-full overflow-x-auto unscroll">
        <NavLink href={"/"}><HomeEmoji /> Home</NavLink>
        <NavLink href={"/info"}><PinEmoji /> About me</NavLink>
        <NavLink href={"/skills"}><CaseEmoji /> Skills</NavLink>
        <NavLink href={"/projects"}><FolderEmoji /> projects</NavLink>
        <NavLink href={"/contacts"}><MailEmoji /> contacts</NavLink>
      </div>
    </nav>
  );
}
