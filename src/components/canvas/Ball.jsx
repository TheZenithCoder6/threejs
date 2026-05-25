import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

// ✅ Mobile detect karo
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const SceneBg = () => {
  const { scene } = useThree();
  scene.background = null;
  return null;
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#5f678f'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // ✅ Mobile pe sirf image dikhao — no WebGL
  if (isMobile) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a2e",
          borderRadius: "50%",
          padding: "18px",
        }}
      >
        <img
          src={icon}
          alt="tech"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  // ✅ Desktop pe 3D Ball
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: false,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    >
      <SceneBg />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
