import { FlashOnOutlined, LanguageOutlined, SmartToyOutlined } from "@mui/icons-material";
import AnimatedInView from "../../hooks/AnimatedInView";

const FeatureSection = () => {
    const features = [
        {
            title: "Exportsite Builder",
            desc: (
                <>
                    <strong>Tampil Global, Tanpa Ribet.</strong><br />
                    Buat website ekspor, toko online, dan link-in-bio dalam hitungan menit.
                    Kelola pelanggan internasional dengan mudah lewat CRM terintegrasi.
                    Semua siap bawa produk Anda ke pasar dunia.
                </>
            ),
            icon: <LanguageOutlined fontSize="inherit" />,
        },
        {
            title: "Export Accelerator",
            desc: (
                <>
                    <strong>Percepat Ekspor, Kurangi Kerumitan.</strong><br />
                    Satu dashboard untuk mempercepat seluruh proses ekspor Anda.
                    Menyediakan informasi produk dan regulasi ekspor, database buyer global, serta forum komunitas.
                    Didukung fitur untuk pengelolaan dokumen, pengiriman, keuangan, bea cukai, dan pajak. Semua terintegrasi dalam satu sistem.
                </>
            ),
            icon: <FlashOnOutlined fontSize="inherit" />,
        },
        {
            title: "AI Designed for Export",
            desc: (
                <>
                    <strong>Keputusan Cepat, Akurat, dan Berbasis Data.</strong><br />
                    Bantu Anda menjawab pertanyaan seputar ekspor, memberikan rekomendasi produk dan negara tujuan, serta menganalisis tren pasar global.
                </>
            ),
            icon: <SmartToyOutlined fontSize="inherit" />,
        },
    ];

    return (
        <section id="produk" className="relative bg-[#080a1f] px-6 sm:px-12 lg:px-32 py-24 flex flex-col items-center gap-20">
            {/* Decorative Backgrounds */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[radial-gradient(circle,_rgba(55,41,185,0.4)_0%,_transparent_60%)] opacity-30 blur-2xl pointer-events-none z-0" />
            <div className="absolute top-10 sm:top-24 left-1/4 opacity-20 w-40 sm:w-56 md:w-72 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl rotate-6 pointer-events-none z-0" />
            <div className="absolute bottom-10 sm:bottom-24 right-0 opacity-20 w-40 sm:w-56 md:w-72 h-16 sm:h-20 md:h-24 bg-gradient-to-tl from-blue-600 to-indigo-500 rounded-full blur-2xl pointer-events-none z-0" />


            {/* Heading */}
            <h2 className="text-4xl font-semibold text-white text-center z-10">
                Fitur Unggulan
            </h2>

            {/* Feature Items */}
            <div className="flex flex-col gap-16 w-full max-w-6xl z-10">
                {features.map((item, idx) => (
                    <AnimatedInView key={idx} from="bottom" once={false}>
                        <div
                            className={`flex flex-col-reverse md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center gap-10 md:gap-16`}
                        >
                            {/* Text */}
                            <div className="md:w-1/2 text-white flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Visual */}
                            <div className="md:w-1/2 flex justify-center items-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md flex items-center justify-center text-white text-6xl shadow-lg">
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    </AnimatedInView>
                ))}
            </div>

            {/* Extra Visual at Bottom */}
            <AnimatedInView>
                <img
                    src="/assets/features.png"
                    className="w-full z-10 rounded-xl mt-10"
                    alt="Fitur Exantara"
                />
            </AnimatedInView>
        </section>
    );
};


export default FeatureSection;