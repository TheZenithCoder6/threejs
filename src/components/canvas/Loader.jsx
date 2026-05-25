import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <span className='canvas-load'>Loading...</span>
        <p style={{ fontSize: 14, color: "#f272c8", fontWeight: 800 }}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;