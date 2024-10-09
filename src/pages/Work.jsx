import { useTranslation } from "react-i18next";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ReactLogo from "../components/ReactLogo";

import "../components/work/work.css";

export default function Work() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Detect if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add mouse move listener for desktop
    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    // Check on initial load and on window resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [isMobile]);

  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("common.translate-temp")}</h1>
      <div className="reactLogo">
        <Canvas>
          <ambientLight />
          {isMobile ? (
            <OrbitControls
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
            /> // Enable touch rotation for mobile
          ) : (
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            /> // Disable manual rotation on desktop
          )}
          <Suspense>
            <ReactLogo
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
              isMobile={isMobile}
              position={[0.1, 0, 0]}
            />
          </Suspense>
          <Environment preset="forest" />
        </Canvas>
      </div>
    </div>
  );
}
