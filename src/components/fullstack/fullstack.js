import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";

const Fullstack = () => {
  return (
      <>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <Atom />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </>
  );
};

export default Fullstack;