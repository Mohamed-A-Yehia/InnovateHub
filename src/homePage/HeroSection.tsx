import HeroLogo from "./HeroLogo";

import "./hero.css";

function HeroSection() {
  return (
    <section
      id="hero"
      className="text-primary flex min-h-[calc(100dvh-96px)] flex-col justify-between"
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

      <div className="pb-10 text-center">
        <div className="m-auto flex w-4xl items-center gap-8 overflow-hidden rounded-md bg-[#212529a4] px-8 py-4 text-center backdrop-blur-sm">
          <HeroLogo />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
