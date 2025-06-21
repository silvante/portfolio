import { AtSign } from "lucide-react";

export default function At({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="p-1 rounded-md border border-gray-500 flex items-center cursor-pointer">
        <div className="bg-violet-600 p-1 rounded-lg">
          <AtSign />
        </div>
        <p className="px-3">{text}</p>
      </div>
    </div>
  );
}
