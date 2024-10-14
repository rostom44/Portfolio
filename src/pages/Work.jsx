import { useTranslation } from "react-i18next";
import { Suspense, useEffect, useState, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ReactLogo from "../components/ReactLogo";
import { DeviceContext } from "../context/deviceContext";

import "../components/work/work.css";

export default function Work() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { deviceType } = useContext(DeviceContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add mouse move listener for desktop only
    if (deviceType === "Desktop") {
      document.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [deviceType]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("common.translate-temp")}</h1>
      <div className="reactLogo">
        <Canvas>
          <ambientLight />
          {deviceType === "Phone" || deviceType === "Tablet" ? (
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
              deviceType={deviceType}
              position={[0.1, 0, 0]}
            />
          </Suspense>
          <Environment preset="forest" />
        </Canvas>
      </div>
    </div>
  );
}
