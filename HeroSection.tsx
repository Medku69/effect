import { useEffect, useRef, useState } from "react";
import RevealLayer from "./RevealLayer";
import { ChevronDown, Sparkles } from "lucide-react";

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";

interface HeroSectionProps {
  onScrollToExplore: () => void;
}

export default function HeroSection({ onScrollToExplore }: HeroSectionProps) {
  // Track mouse and apply smoothing (lerp)
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    // Mouse listener inside the whole screen to follow cursor accurately
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic smoothing animation loop
    const tick = () => {
      // If position hasn't been set yet, initialize directly
      if (smooth.current.x === -999) {
        smooth.current = { ...mouse.current };
      } else {
        // Linear Interpolation loop: factor 0.1 for high fluid responsive layout
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      }

      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: "100dvh" }}
    >
      {/* 1. Base Image with slow Ken Burns Ken zoom out animation */}
      <div
        id="base-bg-image"
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom pointer-events-none"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* 2. Reveal Layer with dual spotlight effect showing BG_IMAGE_2 */}
      <RevealLayer
        image={BG_IMAGE_2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
      />

      {/* 3. Heading layers of time - rising up premium animation */}
      <div
        id="hero-heading-container"
        className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50 select-none"
      >
        <h1 className="text-white leading-[0.95]">
          <span
            id="heading-line-1"
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: "-0.05em", animationDelay: "0.25s" }}
          >
            Анхны
          </span>
          <span
            id="heading-line-2"
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: "-0.08em", animationDelay: "0.42s" }}
          >
            вэбсайт
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left block - records millions of years of ancient sediment */}
      <div
        id="hero-bottom-left-desc"
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade"
        style={{ animationDelay: "0.7s" }}
      >
        <p className="text-sm text-white/80 leading-relaxed font-light">
          Монголд 1 секунд өнгөрөх тутамд дэлхийд 1 секунд өнгөрч байдаг.
        </p>
      </div>

      {/* 5. Bottom-right block containing descriptive texts and action buttons */}
      <div
        id="hero-bottom-right-desc"
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
        style={{ animationDelay: "0.85s" }}
      >
        {/* User request anime slogan integrated beautifully as interactive banner */}
        <div className="bg-[#e8702a]/15 border border-[#e8702a]/30 rounded-xl p-3 w-full backdrop-blur-md animate-pulse">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wider uppercase mb-1">
            <Sparkles size={12} />
            Ачлууны уриа үг
          </div>
          <p className="text-white font-bold text-sm leading-tight">
            Бүгдээрээ anime үзэцгээе! 🍿✨
          </p>
        </div>
        
        {/* Main active action buttons */}
        <button
          id="hero-start-digging-btn"
          onClick={onScrollToExplore}
          className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 cursor-pointer pointer-events-auto"
        >
          Start Digging
        </button>
      </div>

      {/* Subtle indicator to scroll down */}
      <button
        id="scroll-indicator"
        onClick={onScrollToExplore}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors py-2 flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest font-semibold z-50 pointer-events-auto animate-bounce cursor-pointer"
      >
        <span>Доош гүйлгэх</span>
        <ChevronDown size={14} />
      </button>
    </section>
  );
}
