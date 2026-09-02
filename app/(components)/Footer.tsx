import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-10  border-t border-gray-200">
      <div className="container md:flex justify-between items-center mx-auto">
          <Link href={"/"}>
            <p className="font-semibold text-4xl ">Xamidov<span className="base_text">.</span></p>
          </Link>
        <p>© {year} Xamidov.uz</p>
      </div>
    </footer>
  );
}
