import { counts } from "@/app/data";

export default function Counters() {
    return (
        <div className="w-full px-5 py-8 sm:px-8 sm:py-10 lg:px-10 border-y border-gray-200">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {counts.map((c) => (
                    <div key={c.id} className="space-y-3 sm:space-y-4 lg:space-y-5">
                        <p className="text-6xl sm:text-7xl font-semibold lg:text-8xl opacity-50 hover:opacity-100 transition-all">
                            {c.amount}
                        </p>

                        <div>
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                                {c.name}
                            </p>

                            <p className="text-base sm:text-lg opacity-50">
                                {c.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}