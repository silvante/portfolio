import NavLink from "../(reusable)/NavLink";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-5">
      <div className="space-x-5 flex flex-wrap justify-center items-center">
        <NavLink href={"/"}>🏠 Home</NavLink>
        <NavLink href={"/info"}>📎 About me</NavLink>
        <NavLink href={"/skills"}>💡 Skills</NavLink>
        <NavLink href={"/projects"}>⚡️ projects</NavLink>
        <NavLink href={"/contacts"}>💬 contacts</NavLink>
      </div>
    </nav>
  );
}
