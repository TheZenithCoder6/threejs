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

// ✅ Mobile ke liye CSS animated ball
const MobileBall = ({ icon }) => {
  return (
    <>
      <style>{`
        @keyframes mobilFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25%       { transform: translateY(-8px) rotate(5deg); }
          50%       { transform: translateY(-12px) rotate(0deg); }
          75%       { transform: translateY(-8px) rotate(-5deg); }
        }
        @keyframes mobilSpin {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes mobilGlow {
          0%, 100% { box-shadow: 0 0 10px #5f678f88, 0 0 20px #5f678f44; }
          50%       { box-shadow: 0 0 20px #5f678fcc, 0 0 40px #5f678f88; }
        }
        .mobile-ball-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mobilFloat 3s ease-in-out infinite;
          cursor: grab;
        }
        .mobile-ball {
          width: 80%;
          height: 80%;
          background: radial-gradient(circle at 35% 35%, #7b84b0, #3d4266 60%, #1a1d35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mobilGlow 3s ease-in-out infinite;
          transition: transform 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-ball:active {
          animation: mobilSpin 0.8s ease-in-out, mobilGlow 3s ease-in-out infinite;
        }
        .mobile-ball img {
          width: 55%;
          height: 55%;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          pointer-events: none;
        }
      `}</style>

      <div className="mobile-ball-wrap">
        <div className="mobile-ball">
          <img src={icon} alt="tech icon" />
        </div>
      </div>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  if (isMobile) {
    return <MobileBall icon={icon} />;
  }

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
