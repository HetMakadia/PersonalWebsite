import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const noiseSvg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>" +
    "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter>" +
    "<rect width='100%' height='100%' filter='url(%23n)'/></svg>";

const noiseDataUrl = `url("data:image/svg+xml,${encodeURIComponent(noiseSvg)}")`;

function Spotlight() {
    const mouseX = useMotionValue(-500);
    const mouseY = useMotionValue(-500);
    const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.05), transparent 70%)`;

    useEffect(() => {
        const canHover = window.matchMedia("(pointer: fine)").matches;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!canHover || reducedMotion) return;

        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);

        const onMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [mouseX, mouseY]);

    return <motion.div className="absolute inset-0" style={{ background }} />;
}

export function AmbientBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-100 select-none">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
                }}
            />

            <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gray-400/10 blur-3xl animate-blob-drift" />
            <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl animate-blob-drift" style={{ animationDelay: "-7s" }} />
            <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-gray-500/10 blur-3xl animate-blob-drift" style={{ animationDelay: "-14s" }} />

            <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                style={{ backgroundImage: noiseDataUrl, backgroundRepeat: "repeat" }}
            />

            <Spotlight />
        </div>
    );
}
