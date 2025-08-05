import AnimatedInView from "../../hooks/AnimatedInView";

const StartExportSection = () => {
    const steps = [
        {
            title: "Learn",
            desc: "Pelajari peluang ekspor, produk, dan regulasi dengan panduan lengkap serta insight pasar global. Terhubung dengan komunitas eksportir untuk berbagi pengalaman dan strategi.",
            color: "from-blue-500 to-purple-500"
        },
        {
            title: "Sell",
            desc: "Buat website ekspor dan toko online profesional dengan mudah. Kelola pelanggan internasional lewat CRM terintegrasi, dan temukan buyer potensial dari berbagai negara.",
            color: "from-purple-600 to-pink-500"
        },
        {
            title: "Manage",
            desc: "Kelola dokumen, pengiriman, keuangan, bea cukai, dan pajak dalam satu platform terpadu. Permudah proses operasional agar bisnis ekspor Anda berjalan lancar tanpa hambatan.",
            color: "from-green-500 to-blue-500"
        }
    ];

    return (
        <>
            <section className="relative bg-[#080a1f] -mt-1 px-6 sm:px-12 lg:px-32 py-24 flex flex-col items-center text-center gap-8">
                <AnimatedInView>
                    <h2 className="text-4xl font-semibold text-white">It’s Easy to Start Export</h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Dengan Exantara, Anda bisa langsung memulai ekspor hanya dengan beberapa langkah. Kelola. Jual. Belajar.
                    </p>
                </AnimatedInView>

                {/* Detail Copywriting */}
                <AnimatedInView>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10 mt-6 text-left">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md text-white shadow-md flex flex-col gap-4"
                            >
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedInView>

                {/* Decorative Blur */}
                <div className="absolute bottom-10 left-10 opacity-10 w-40 h-40 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full blur-2xl"></div>
            </section >
        </>
    );
};


export default StartExportSection;