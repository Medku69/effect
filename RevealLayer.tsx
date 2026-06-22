import { useEffect, useRef, useState } from "react";

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

const SPOTLIGHT_R = 260;

export default function RevealLayer({ image, cursorX, cursorY }: RevealLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle canvas sizing and window resize
  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Update canvas sizing dynamically
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
    }
  }, [dimensions]);

  // Redraw path & update mask on every cursor update or render
  useEffect(() => {
    const canvas = canvasRef.current;
    const revealDiv = revealRef.current;
    if (!canvas || !revealDiv || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear previous drawings
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // If spotlight is off-screen initially, don't mask or keep it black
    const x = cursorX === -999 ? dimensions.width / 2 : cursorX;
    const y = cursorY === -999 ? dimensions.height / 2 : cursorY;

    // Build the radial gradient: 0 -> SPOTLIGHT_R
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.4, "rgba(255,255,255,1)");
    gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
    gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
    gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    // Draw the gradient inside a circle arc
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    // Convert canvas to Data URL for mask
    try {
      const dataUrl = canvas.toDataURL();
      const maskStyle = `url(${dataUrl})`;
      
      revealDiv.style.maskImage = maskStyle;
      revealDiv.style.webkitMaskImage = maskStyle;
      revealDiv.style.maskSize = "100% 100%";
      revealDiv.style.webkitMaskSize = "100% 100%";
    } catch (e) {
      console.error("Masking error: ", e);
    }
  }, [cursorX, cursorY, dimensions]);

  return (
    <>
      {/* Hidden canvas sizing to screen width & height */}
      <canvas
        id="spotlight-canvas"
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: "none" }}
      />
      {/* Masked reveal container holding the second image */}
      <div
        id="reveal-layer-image"
        ref={revealRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          transition: "mask-image 0s, -webkit-mask-image 0s",
        }}
      />
    </>
  );
}
