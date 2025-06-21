import { TreePalm } from "lucide-react";

export default function TopMark() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="py-1 px-3 bg-violet-600 rounded-tl-lg rounded-tr-lg">
        <p className="text-sm flex items-center gap-3">
          There are a lot of cool stuff here <TreePalm />
        </p>
      </div>
    </div>
  );
}
