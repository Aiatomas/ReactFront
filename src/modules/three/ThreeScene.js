import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three';
import {Perf} from "r3f-perf";
import {Rays} from "./Rays";
import {useControls} from "leva";
import {Torus} from "./Torus";
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls, Bvh } from "@react-three/drei"

const ThreeScene = ({photo}) => {
    const { enabled } = useControls({ enabled: true })
    return (
        <Canvas camera-position-z={40} camera-far={100} style={{ height: `50vw`}}>
            <color attach="background" args={['#202025']} />
            <Perf position="bottom-right" style={{ margin: 10 }} />
            {/** Anything that Bvh wraps is getting three-mesh-bvh's acceleratedRaycast.
             Click on "enabled" to see what normal raycast performance in threejs looks like. */}
            <Bvh firstHitOnly enabled={enabled}>
                <Rays>
                    {/*<Torus />*/}
                    {/*<torusGeometry args={[1.29, .06, .16, 62]} />*/}
                    {/*<cylinderGeometry args={[1.27, 1, 2.4, 64, 12, true]} />*/}
                    {/*<sphereGeometry args={[3, 20, 30]} />*/}
                </Rays>
                {/*<cylinderGeometry args={[1.27, 1, 2.4, 64, 12, true]} />*/}
            </Bvh>
            <OrbitControls />
            {/*<OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />*/}
            {/*<Picker />*/}
        </Canvas>
    );
};

export default ThreeScene;