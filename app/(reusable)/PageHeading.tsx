import { AtSign } from "lucide-react";

export default function PageHeading({ text }: { text: string }) {
    return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{text}</h1>
    );
}
