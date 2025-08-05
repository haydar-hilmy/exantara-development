import AnimatedInView from "../../hooks/AnimatedInView";

const AboutSection = () => {
    return (
        <section id="tentang" className="relative bg-gradient-to-br from-[#0a0f29] to-[#13183b] px-6 sm:px-12 lg:px-32 py-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden rounded-t-[10px] md:rounded-t-[25px] lg:rounded-t-[50px]">
            {/* Left - Text */}
            <AnimatedInView from="bottom" once={false}>
                <div className="flex-1 flex flex-col gap-6 z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Kami Bukan Hanya{" "}
                        <span className="bg-gradient-to-br from-blue-400/70 to-blue-300/60 bg-clip-text text-transparent">
                            Membangun Platform
                        </span><br />
                        Kami{" "}
                        <span className="bg-gradient-to-br from-blue-400/70 to-pink-400/60 bg-clip-text text-transparent">
                            Membangun Perubahan
                        </span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Di balik Exantara, ada tim yang berangkat dari semangat yang sama.
                        Kami hadir untuk membantu UMKM Indonesia naik kelas dan tampil di pasar global.
                    </p>

                    {/* Heading di atas video */}
                    <h3 className="text-white text-lg font-semibold mt-4">
                        <span className="text-sm mr-2 align-middle">▶</span>
                        Cerita di balik Exantara
                    </h3>
                </div>
            </AnimatedInView>

            {/* Right - Video */}
            <AnimatedInView from="bottom" once={false}>
                <div className="flex-1 z-10 w-full max-w-md">
                    <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-white/10">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/about_us.webm" type="video/webm" />
                            <source src="/assets/videos/about_us.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </AnimatedInView>

            {/* Background gradient effects */}
            <div className="absolute -top-16 -left-24 w-64 h-64 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 -right-10 w-40 h-40 bg-blue-400 opacity-10 blur-2xl rounded-full"></div>
        </section>
    );
};


export default AboutSection;