import NavLink from "../(reusable)/NavLink";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex items-center gap-10 uppercase text-sm">
          <NavLink href={"/"}>Bosh sahifa</NavLink>
          <NavLink href={"/founder"}>Asoschi</NavLink>
          <NavLink href={"/projects"}>Loyihalar</NavLink>
          <NavLink href={"/contacts"}>Bog'lanish</NavLink>
      </div>
    </nav>
  );
}
