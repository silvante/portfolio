export default function Footer() {
  return (
    <footer className="p-5">
      <div className="w-full md:flex justify-between items-center">
        <p className="text-white/70">
          original portfolio{" "}
          <span className="text-white">@built without AI</span>
        </p>
        <p className="text-white/70">
          email:{" "}
          <a
            href="mailto:info@xamidov.uz"
            target="_blanck"
            className="text-white"
          >
            info@xamidov.uz
          </a>
        </p>
      </div>
    </footer>
  );
}
