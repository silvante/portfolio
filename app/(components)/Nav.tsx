import NavLink from "../(reusable)/NavLink";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex items-center gap-6">
          <NavLink href={"/"}>Bosh sahifa</NavLink>
          <NavLink href={"/info"}>Batafsil</NavLink>
          <NavLink href={"/projects"}>Loyihalar</NavLink>
      </div>
    </nav>
  );
}
