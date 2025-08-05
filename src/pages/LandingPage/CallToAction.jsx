import AnimatedInView from "../../hooks/AnimatedInView";

export default function CallToActionSection() {
    return (
        <section className="relative bg-[#080a1f] text-white px-6 sm:px-12 lg:px-32 py-24 overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            {/* Background Gradient Flare */}
            <div className="absolute -left-20 top-1/3 md:w-[180px] md:h-[180px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(55,41,185,0.4)_0%,_transparent_70%)] opacity-30 blur-3xl pointer-events-none z-0" />

            {/* Gambar dengan teks */}
            <AnimatedInView>
                <div className="flex-1 z-10 w-full max-w-sm aspect-[3/4] bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow-lg overflow-hidden relative">
                    <img
                        src="/assets/cta_section.webp"
                        alt="Ekspor digital"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-5 left-0 px-8 py-3 text-xl text-white text-left">
                        Jelajahi dunia Perdagangan<br /> Internasional bersama<br /> Exantara
                    </div>
                </div>
            </AnimatedInView>

            {/* Text Content */}
            <AnimatedInView>
                <div className="flex-1 z-10 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
                        Satu Platform. <br className="hidden md:block" /> Semua Solusi Ekspor Anda.
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                        Kelola bisnis ekspor Anda tanpa ribet. Mulai dari pembuatan toko digital, pengurusan dokumen, hingga akses langsung ke buyer global semua terintegrasi dalam satu platform.
                        Tinggalkan sistem yang terpisah dan temukan kenyamanan ekspor dalam satu genggaman.
                    </p>
                    <a
                        href="#kontak"
                        className="inline-block bg-blue-700 hover:bg-blue-800 transition-all text-white font-semibold py-3 px-6 rounded-full mt-4"
                    >
                        Mulai Sekarang
                    </a>
                </div>
            </AnimatedInView>
        </section>
    );
}
