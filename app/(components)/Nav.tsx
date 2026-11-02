import NavLink from "../(reusable)/NavLink";
import { navLinks } from "@/app/data";

export default function Nav({ heightClass }: { heightClass?: string }) {
  return (
    <ul className="flex items-center justify-center">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink href={link.href} heightClass={heightClass}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
