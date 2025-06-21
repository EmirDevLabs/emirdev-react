import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function LaptopMock() {
  return (
    <group scale={[1, 1, 1]} position={[0, 0, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[2.2, 0.13, 1.5]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Laptop Screen + CMD Overlay */}
      <group position={[0, 0.7, -0.7]} rotation={[-0.28, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.2, 1.2, 0.08]} />
          <meshStandardMaterial color="#111" />
        </mesh>
        <Html 
          transform
          position={[0, 0, 0.05]}
          distanceFactor={1.1}
          style={{ width: '420px', height: '220px' }}
        >
          <div style={{ 
              color: '#0f0', 
              backgroundColor: 'black', 
              fontFamily: 'monospace', 
              padding: '12px', 
              fontSize: '14px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              boxSizing: 'border-box',
              textAlign: 'left',
            }}>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {`> Booting main system...\n> Kernel loaded successfully.\n> Initializing network stack...\n> IPv6 address assigned.\n> Establishing connection to server_ZION...\n> Connection secured. Encryption: AES-256\n> Authenticating user: N3O...\n> ACCESS GRANTED\n\n> Running project_showcase.exe...\n\n// Designing the future of education\n// Platform for better online courseware\n\n[00:01.337] - Compiling modules...\n[00:01.998] - Rendering UI components...\n[00:02.541] - Fetching data from mainframe...\n[00:03.112] - All systems operational.\n> Ready.`}
            </pre>
          </div>
        </Html>
      </group>
    </group>
  )
}

function Laptop3D() {
  return (
    <Canvas camera={{ position: [0, 0.7, 3], fov: 38 }} style={{ width: '100%', height: '100%', display: 'block' }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, -5]} intensity={1.2} />
      <LaptopMock />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        target={[0, 0.4, 0]}
      />
    </Canvas>
  )
}

export default Laptop3D; 