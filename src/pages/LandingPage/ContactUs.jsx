import { EmailOutlined, Facebook, Instagram, LinkedIn, PlaceOutlined, WhatsApp, YouTube } from "@mui/icons-material";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TelInput from "../../components/input/TelInput";
import EmailInput from "../../components/input/EmailInput";
import TextInput from "../../components/input/TextInput";
import TextArea from "../../components/input/TextArea";

const ContactUsSection = () => {
    const { control, handleSubmit } = useForm();

    const onSubmitContactForm = (data) => {
        console.log(data);
        alert("Form submitted!");
    };

    return (
        <section id="kontak" className="relative bg-gradient-to-br from-[#080a1f] to-[#13183b] px-6 sm:px-12 lg:px-32 py-24 text-white">
            {/* Decorative Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3327ae40,_transparent_70%)] blur-3xl opacity-30 pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-10">
                {/* Section Heading */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl font-semibold">Kontak Exantara</h2>
                        <p className="text-gray-400 text-lg">
                            Konsultasikan kebutuhan ekspor digital Anda bersama tim kami. Kami percaya produk Indonesia juga layak tampil di pasar dunia.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 flex-wrap justify-start">
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/6282337123533"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
                        >
                            {/* <EmailOutlined className="text-white text-lg" /> */}
                            <WhatsApp className="text-white text-lg" />
                            <span>WhatsApp Kami</span>
                        </a>

                    </div>
                </div>

                {/* Contact Form */}
                {/* {showForm && ( */}
                <div className="w-full max-w-xl mt-10 md:mt-0 bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-lg text-left">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Formulir Kontak</h3>
                    <form onSubmit={handleSubmit(onSubmitContactForm)} className="flex flex-col gap-5">
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: "Nama wajib diisi" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextInput
                                    {...field}
                                    label="Nama Lengkap"
                                    placeholder="John Doe"
                                    required
                                    errorMsg={error?.message}
                                />
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "Email wajib diisi", pattern: {
                                    value: /^.+@.+$/,
                                    message: "Format email tidak valid",
                                }
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <EmailInput
                                    {...field}
                                    label="Email"
                                    placeholder="user@exantara.com"
                                    required
                                    errorMsg={error?.message}
                                />
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: "Nomor telepon wajib diisi", pattern: {
                                    value: /^\D*(\d\D*){9,}$/,
                                    message: "Nomor telepon tidak valid",
                                },
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <TelInput
                                    {...field}
                                    label="Nomor Telepon"
                                    placeholder="08123456789"
                                    required
                                    errorMsg={error?.message}
                                />
                            )}
                        />

                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: "Pesan wajib diisi" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextArea
                                    {...field}
                                    label="Pesan"
                                    placeholder="Tulis pesan Anda..."
                                    required
                                    errorMsg={error?.message}
                                />
                            )}
                        />

                        <button
                            type="submit"
                            className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
                        >
                            Kirim
                        </button>
                    </form>
                    <p className="text-gray-400 text-sm mt-4">
                        Informasi Anda akan kami gunakan untuk menghubungi Anda terkait layanan dari Exantara.
                    </p>
                </div>
                {/* )} */}
            </div>
        </section>
    );
};

export default ContactUsSection;