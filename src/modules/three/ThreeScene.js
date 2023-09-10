import React, {useEffect} from 'react';
import * as THREE from 'three';
import {useControls} from "leva";
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, ContactShadows, Environment, OrbitControls, Bvh } from "@react-three/drei"
import {MyMugModel} from "./MyMugModel";

const ThreeScene = ({photo}) => {
    // const { enabled } = useControls({ enabled: true })

    // const gltf = useLoader(ColladaLoader, modelPath);
    // const loaderModel = new ColladaLoader();
    // loaderModel.load(modelPath, (collada) => {
    //     const mesh = collada.scene;
    //     scene.add(mesh);
    // });

    // const loader = new THREE.TextureLoader();
    // const texture = loader.load( 'resources/images/wall.jpg' );
    // texture.colorSpace = THREE.SRGBColorSpace;

    // const material = new THREE.MeshBasicMaterial({
    //     color: 0xFF8844,
    //     map: texture,
    // });

    return (
        <Canvas camera-position-z={40} camera-far={100} style={{ height: `25vw`, width: `25vw`}}>
            {/*<color attach="background" args={['#ffffff']} />*/}
            <ambientLight intensity={1.4}  />
            <spotLight position={[11, -5, 11]} angle={0.15} penumbra={1} intensity={555} />
            {/*<directionalLight intensity={5} position={[10, 10, 10]} />*/}

            <OrbitControls

            />
            <MyMugModel  />
        </Canvas>


        // <Canvas camera-position-z={40}  camera-far={100} style={{ height: `50vw`}}>
        //     {/*<color attach="background" args={['#202025']} />*/}
        //     {/*<Perf position="bottom-right" style={{ margin: 10 }} />*/}
        //
        //     <ambientLight intensity={0.5} />
        //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        //
        //     {/*<Bvh firstHitOnly enabled={enabled}>*/}
        //     {/*    <Rays>*/}
        //     {/*        /!*<Torus />*!/*/}
        //     {/*        /!*<torusGeometry args={[1.29, .06, .16, 62]} />*!/*/}
        //     {/*        /!*<cylinderGeometry args={[1.27, 1, 2.4, 64, 12, true]} />*!/*/}
        //     {/*        /!*<sphereGeometry args={[3, 20, 30]} />*!/*/}
        //     {/*    </Rays>*/}
        //     {/*    /!*<cylinderGeometry args={[1.27, 1, 2.4, 64, 12, true]} />*!/*/}
        //     {/*</Bvh>*/}
        //     <OrbitControls />
        //     <MyMugModel />
        //     {/*<OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />*/}
        //     {/*<Picker />*/}
        // </Canvas>

        // <Canvas camera={{ position: [0, 0, 5] }} style={{ height: `50vw`}}>
        //     <ambientLight intensity={0.5} />
        //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        //     <OrbitControls />
        //
        //     <MyMugModel />
        // </Canvas>
    );
};

export default ThreeScene;