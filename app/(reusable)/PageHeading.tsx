type Props = {
  text: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export default function PageHeading({ text, eyebrow, align = "left" }: Props) {
  const centered = align === "center";

  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      {eyebrow ? (
        <p className="eyebrow mb-5">
          <span className="base_bg block size-1.5" />
          {eyebrow}
        </p>
      ) : null}

      <h1 className="text-display">
        {text}
        <span className="dot">.</span>
      </h1>

      <span aria-hidden className="base_bg mt-7 block h-2 w-20" />
    </div>
  );
}
