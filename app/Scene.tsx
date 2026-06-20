"use client"
import { CubeCamera, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
export function Cubie({position}: {position: [number, number, number]}){
    const colors = ["red", "orange", "white", "yellow", "green", "blue"] 
    return(
        <mesh position={position}>
            <boxGeometry args={[.9,.9,.9]}/>
            {colors.map((color, i) => (
                <meshStandardMaterial key={i} attach={`material-${i}`} color={color}/>
            ))}
        </mesh>

    );
}


export default function Scene(){
    const positions:[number, number, number][] = []
    for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j++){
            for (let k = -1; k <= 1; k++){
               positions.push([i,j,k]) 
            }
        }
    }
    return(
        <Canvas className="border-red-500">
            <ambientLight/>
            {/* <directionalLight position={[5,5,5]}/> */}
            {
                positions.map(
                    (pos, i) => <Cubie key={i} position={pos}/>
                )
            }
            {/* <Cubie position={0,0,0}></Cubie> */}
            <OrbitControls/>
        </Canvas>
    )
}
