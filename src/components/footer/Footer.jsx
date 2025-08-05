import { EmailOutlined, Facebook, Instagram, LinkedIn, PlaceOutlined, WhatsApp, YouTube } from "@mui/icons-material";


export default function FooterSection() {
    return (
        <footer className="bg-[#080a1f] text-white px-6 sm:px-12 lg:px-32 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
                {/* Branding */}
                <div className="lg:col-span-2 space-y-4">
                    <h1 className="text-2xl font-bold text-white">Exantara</h1>
                    <p className="italic text-sm text-gray-300">
                        Simplifying Export Operations with SaaS Technology
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="font-semibold text-white">Exantara</span>, hadir untuk mengakselerasi ekspor UMKM Indonesia. Exantara adalah solusi SaaS terintegrasi yang memberdayakan UMKM untuk menaklukkan pasar global dengan efisien dan terukur.
                    </p>
                </div>

                {/* Dukungan */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Dukungan</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Akademi Exantara</a></li>
                        <li><a href="#">Komunitas Exantara</a></li>
                        <li><a href="#">Cari Mentor</a></li>
                        <li><a href="#">Pusat Bantuan</a></li>
                    </ul>
                </div>

                {/* Produk */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Produk</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Xportsite Builder</a></li>
                        <li><a href="#">Export Accelerator</a></li>
                        <li><a href="#">AI Designed for Export</a></li>
                        <li><a href="#">Marketplace</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#beranda">Beranda</a></li>
                        <li><a href="#tentang">Tentang Kami</a></li>
                        <li><a href="#produk">Produk</a></li>
                        <li><a href="#harga">Harga</a></li>
                        <li><a href="#kontak">Kontak</a></li>
                    </ul>
                </div>

                {/* Important Links */}
                <div>
                    <h3 className="font-semibold text-white mb-4">Important Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>

                {/* Kontak & Sosial */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="font-semibold text-white mb-2">Rincian Kontak</h3>
                    <div className="text-sm text-gray-400 space-y-2">
                        <div className="flex items-start gap-2">
                            <PlaceOutlined className="text-blue-500 text-base mt-0.5" />
                            <span>Kediri, Jawa Timur, Indonesia</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <WhatsApp className="text-green-500 text-base mt-0.5" />
                            <a href="https://wa.me/6282337123533" target="_blank" rel="noopener noreferrer">
                                +62 823-3712-3533
                            </a>
                        </div>
                        <div className="flex items-start gap-2">
                            <EmailOutlined className="text-red-400 text-base mt-0.5" />
                            <a href="mailto:exantara@gmail.com">exantara@gmail.com</a>
                        </div>
                        <div className="flex items-start gap-2">
                            <EmailOutlined className="text-red-400 text-base mt-0.5" />
                            <a href="mailto:info@exantara.com">info@exantara.com</a>
                        </div>
                    </div>

                    <h3 className="font-semibold text-white mt-6">Let's Connect!</h3>
                    <p className="text-sm text-gray-400 mb-2">
                        Mari terhubung dan temukan bagaimana kita bisa berkolaborasi<br />
                        untuk menembus pasar Global
                    </p>

                    <div className="flex space-x-3">
                        {[
                            { icon: <Instagram fontSize="small" />, href: "https://www.instagram.com/exantara/" },
                            { icon: <Facebook fontSize="small" />, href: "#" },
                            { icon: <LinkedIn fontSize="small" />, href: "https://www.linkedin.com/in/exantara-group-22b960354/" },
                            { icon: <YouTube fontSize="small" />, href: "https://www.youtube.com/@Exantara" },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center bg-[#3729b9] rounded-md hover:scale-105 transition text-white"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Exantara. All rights reserved.
            </div>
        </footer>
    );
}