/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PropTypes from "prop-types";
const modelPath = "/src/public/react-logo/reactLogo.gltf";

export default function Model({ mouseX, mouseY, ...props }) {
  const { nodes, materials } = useLoader(GLTFLoader, modelPath);
  const logoRef = useRef();

  useFrame(() => {
    // Correct the inversion by changing the sign of the xRotation
    const xRotation = (mouseY / window.innerHeight - 0.5) * Math.PI;
    const yRotation = (mouseX / window.innerWidth - 0.5) * Math.PI;

    logoRef.current.rotation.x = xRotation;
    logoRef.current.rotation.y = yRotation;
  });

  materials["Material.002"].color.set("#4682B4");

  return (
    <group ref={logoRef} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
}

Model.propTypes = {
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
};
