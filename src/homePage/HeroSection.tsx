function HeroSection() {
  return (
    <section
      id="hero"
      className="text-primary flex min-h-[calc(100dvh-96px)] flex-col justify-around"
    >
      <div className="flex flex-col items-center pt-32">
        <h1 className="text-4xl tracking-wider">
          <span className="font-logo font-semibold">InnovateHub</span>: Your
          Technology Growth Partner
        </h1>
        <p className="w-xl py-6 text-center text-2xl font-light tracking-wide">
          We deliver innovative tech solutions that drive results. From custom
          software to full-scale tech services — we’re here to power your next
          big idea.
        </p>
      </div>

      <div className="text-center">
        <div className="m-auto flex w-fit items-center justify-between gap-8 rounded-md bg-[#212529a4] px-8 py-4 text-center backdrop-blur-sm">
          <p className="tracking-wide">
            Trusted By <br /> Companies:
          </p>
          <div className="flex items-center justify-center gap-9">
            <img className="w-28" src="business-insider.png" alt="" />
            <img className="w-28" src="/markting.png" alt="" />
            <img className="w-28" src="/techcrunch.png" alt="" />
            <img className="w-28" src="/nyt.png" alt="" />
            <img className="w-28" src="/usa-today.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
