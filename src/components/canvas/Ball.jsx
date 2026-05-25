import React, { Suspense, useRef, useState } from "react";
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

const MobileBall = ({ icon }) => {
  const ballRef = useRef(null);

  // Rotation state
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  // Touch tracking
  const lastTouch = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const floatAnim = useRef(null);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    lastTouch.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    // Float animation pause karo jab drag ho
    if (ballRef.current) {
      ballRef.current.style.animation = "none";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // scroll rok deta hai

    const dx = e.touches[0].clientX - lastTouch.current.x;
    const dy = e.touches[0].clientY - lastTouch.current.y;

    setRotY((prev) => prev + dx * 0.8); // left-right rotate
    setRotX((prev) => prev - dy * 0.8); // up-down rotate

    lastTouch.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    // Float animation wapas
    if (ballRef.current) {
      ballRef.current.style.animation = "";
    }
  };

  return (
    <>
      <style>{`
        @keyframes mobilFloat {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-12px); }
        }
        @keyframes mobilGlow {
          0%, 100% { box-shadow: 0 0 10px #5f678f88, 0 0 20px #5f678f44; }
          50%       { box-shadow: 0 0 20px #5f678fcc, 0 0 40px #5f678f88; }
        }
        .m-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mobilFloat 3s ease-in-out infinite;
        }
        .m-ball {
          width: 80%;
          height: 80%;
          background: radial-gradient(circle at 35% 35%, #7b84b0, #3d4266 60%, #1a1d35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: mobilGlow 3s ease-in-out infinite;
          will-change: transform;
          touch-action: none;
          cursor: grab;
          transition: box-shadow 0.3s;
        }
        .m-ball:active { cursor: grabbing; }
        .m-ball img {
          width: 55%;
          height: 55%;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <div ref={floatAnim} className="m-wrap">
        <div
          ref={ballRef}
          className="m-ball"
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transformStyle: "preserve-3d",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
