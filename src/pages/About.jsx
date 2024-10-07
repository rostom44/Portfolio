import { useTranslation } from "react-i18next";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ReactLogo from "../components/ReactLogo";
import "../components/about/about.css";
export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("common.translate-temp")}</h1>
      <Canvas className="reactLogo">
        <ambientLight />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Suspense>
          <ReactLogo
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
            position={[0, 0, 0]}
          />
        </Suspense>
        <Environment preset="forest" />
      </Canvas>
    </div>
  );
}
