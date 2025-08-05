import { AttachMoneyOutlined, AutoAwesomeOutlined, DashboardOutlined, IntegrationInstructionsOutlined, SettingsOutlined } from "@mui/icons-material";
import AnimatedInView from "../../hooks/AnimatedInView";


const WhyCard = ({ icon, title, desc, reverse = false }) => {
    return (
        <div
            className={`
                relative overflow-hidden rounded-xl w-full md:w-3/5 p-6 
                flex flex-col items-start gap-5
                border border-white/10 shadow-md transition-all duration-300 ease-in-out
                backdrop-blur-md bg-white/10 hover:bg-white/15 hover:shadow-xl cursor-default
                ${reverse ? "sm:flex-row-reverse self-end text-left sm:text-right" : "sm:flex-row text-left"}
            `}
        >
            <div className="flex items-center justify-center rounded-md p-3 w-fit bg-white/10 text-3xl text-blue-400 shadow-inner">
                {icon}
            </div>
            <div className="flex flex-col space-y-1.5">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-base font-light text-gray-300">{desc}</p>
            </div>
        </div>
    );
};

const WhyExantaraSection = () => {
    return (
        <section className="flex flex-col gap-10 bg-gradient-to-br from-[#080a1f] to-[#13183b] px-8 py-16 md:px-16 md:py-20 lg:px-32 lg:py-24 -translate-y-0">
            <AnimatedInView>
                <div className="flex flex-col items-start gap-4">
                    <h2 className="text-2xl md:text-4xl font-semibold">Why Exantara?</h2>
                    <p className="text-2xl md:text-4xl font-light w-10/12 leading-[160%] text-gray-400">
                        <span className="hover:text-gray-200 duration-100 cursor-default">Kami percaya produk Indonesia layak bersaing di pasar dunia.</span> <br />
                        <span className="hover:text-gray-200 duration-100 cursor-default">Exantara adalah solusi ekspor digital <i className="font-semibold">all-in-one</i> untuk pebisnis yang ingin <b className="font-semibold">go global</b>.</span>
                    </p>
                </div>
            </AnimatedInView>

            <AnimatedInView>
                <div className="flex flex-col gap-10 w-full">
                    <WhyCard
                        title="All in one platform"
                        desc="Tidak perlu berpindah-pindah aplikasi, kelola bisnis ekspor Anda dari hulu ke hilir di satu tempat."
                        icon={<DashboardOutlined color="inherit" fontSize="inherit" />}
                    />
                    <WhyCard
                        title="Seamless Integration"
                        desc="Dari pembuatan website ekspor, manajemen penjualan, dokumen ekspor, hingga logistik semuanya berjalan otomatis dan saling terintegrasi."
                        icon={<IntegrationInstructionsOutlined color="inherit" fontSize="inherit" />}
                        reverse
                    />
                    <WhyCard
                        title="Affordable"
                        desc="Dilengkapi dengan berbagai fitur penting untuk ekspor, Exantara hadir dengan biaya yang tetap bersahabat untuk pelaku UMKM."
                        icon={<AttachMoneyOutlined color="inherit" fontSize="inherit" />}
                    />
                    <WhyCard
                        title="Customizable"
                        desc="Setiap bisnis punya cara kerja yang berbeda. Exantara dirancang agar bisa dikustom sesuai kebutuhan dan proses bisnis Anda."
                        icon={<SettingsOutlined color="inherit" fontSize="inherit" />}
                        reverse
                    />
                    <WhyCard
                        title="AI Export Assistant"
                        desc="Cari peluang ekspor dengan cepat. Bantu prediksi tren, temukan buyer, dan buat dokumen ekspor instan."
                        icon={<AutoAwesomeOutlined color="inherit" fontSize="inherit" />}
                    />
                </div>
            </AnimatedInView>
        </section>
    )
}

export default WhyExantaraSection;