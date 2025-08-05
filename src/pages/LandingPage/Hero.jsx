const HeroSection = () => {
  return (
    <>
      {/* Placeholder untuk anchor scroll */}
      <div id="beranda" className="h-0"></div>

      <section className="sticky top-0 h-screen px-6 sm:px-8 md:px-24 lg:px-32 pt-8 flex flex-col items-start justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster
          preload="auto"
        >
          <source src="/assets/videos/hero_section.webm" type="video/webm" />
          <source src="/assets/videos/hero_section.mp4" type="video/mp4" />
          Browser tidak mendukung video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 sm:gap-10 md:gap-20">
          <h1 className="text-7xl font-bold text-white drop-shadow">
            One Platform<br />To Go Global
          </h1>
          <p className="text-lg text-white drop-shadow">
            Sederhanakan operasional ekspor Anda<br />
            dengan solusi digital berbasis cloud yang terintegrasi.
          </p>
        </div>

        <div className="relative z-10 mt-6">
          <button className="bg-white hover:bg-gray-300 duration-100 font-medium text-black px-5 py-3 rounded-full">
            Uji Coba Gratis
          </button>
        </div>
      </section>
    </>
  );
};


export default HeroSection;