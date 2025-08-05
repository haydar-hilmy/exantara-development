import AnimatedInView from "../../hooks/AnimatedInView";

export default function PricingSection() {
    const plans = [
        {
            name: "Free",
            price: "Rp0",
            highlight: false,
            buttonText: "Mulai Sekarang",
            features: [
                "Exportsite Builder",
                "Link in Bio",
                "2 Store • 1 User",
                "namadomain.exantara.com",
            ],
        },
        {
            name: "Pro",
            price: "Rp199.000 / bulan",
            highlight: true,
            buttonText: "Tingkatkan Sekarang",
            features: [
                "Semua fitur Free",
                "Export Accelerator",
                "Custom Domain",
                "5 Store • 5 Users",
                "Analytics & Broadcast",
                "Unlimited Produk",
            ],
        },
        {
            name: "Enterprise",
            price: "Hubungi Kami",
            highlight: false,
            buttonText: "Hubungi Tim Kami",
            features: [
                "Semua fitur Pro",
                "Kustomisasi sistem",
                "Support dedicated",
                "API & Konsultasi ahli",
            ],
        },
    ];

    return (
        <section id="harga" className="relative bg-[#080a1f] px-6 sm:px-12 lg:px-32 py-24 flex flex-col items-center gap-16">
            <h2 className="text-4xl font-semibold text-white text-center">Pilih Rencana</h2>

            {/* Decorative gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[200px] lg:w-[700px] lg:h-[700px] 
                bg-[radial-gradient(circle,_rgba(55,41,185,0.4)_0%,_transparent_70%)] 
                opacity-30 blur-3xl pointer-events-none z-0">
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl z-10">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col justify-between p-8 rounded-xl text-white shadow-lg border backdrop-blur-md transition-all duration-300
                        ${plan.highlight
                                ? "bg-gradient-to-br from-[#3729b9]/30 to-white/10 border-[#3729b9]/40 ring-2 ring-[#3729b9] scale-[1.02] hover:scale-105"
                                : "bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:scale-[1.02]"
                            }`}
                    >
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-semibold">{plan.name}</h3>
                            <p className="text-xl text-[#3729b9] font-bold">{plan.price}</p>
                            <ul className="flex flex-col gap-2 text-gray-300 text-sm leading-relaxed">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>• {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="mt-6 bg-white text-black hover:bg-gray-200 transition font-semibold py-2 px-4 rounded-md">
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
