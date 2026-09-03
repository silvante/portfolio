import Link from "next/link";

export default function Banner() {
    return (
        <section className="w-full min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-3xl w-full flex flex-col items-center justify-center text-center gap-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70">
                    Mardonbek Khamidov
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Biznesingizni keyingi darajaga olib chiqamiz<span className="base_text">.</span>
                </h1>

                <p className="max-w-lg text-base md:text-lg opacity-70 leading-relaxed">
                    Biznes uchun zamonaviy veb-saytlar, ilovalar va foydali raqamli
                    yechimlar.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link href="/contacts" className="base_btn">
                        Bog'lanish
                    </Link>

                    <Link href="/info" className="ghost_btn">
                        Batafsil
                    </Link>
                </div>
            </div>
        </section>
    );
}