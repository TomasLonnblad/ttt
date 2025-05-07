
  import { Canvas, useFrame } from "@react-three/fiber";
  import { OrbitControls, Sparkles, } from "@react-three/drei";
  import { useRef } from "react";


  const App = () => {
    return (
      <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight position={[1, 1, 1]} intensity={10} color={'#9CDBA6'} />
        <color attach="background" args={['#F0F0F0']} />
        <RotatingCube />
    
      </Canvas>
    );
  };
 
  const RotatingCube = () => {
    const meshRef = useRef();
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
      }
    });
  
    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2,2, 2]} />
        <meshLambertMaterial color="##1702cf" emissive="#468585" />
        <Sparkles count={200} scale={2} size={5} Background= "transparent" speed={0.001} noise={0.2} color="blue" />
      </mesh>
    );
  };
  
  export default App;
