import React, {useRef} from 'react';
// import ColladaLoader from "three-collada-loader";
import modelPath from "./modells/uploads_files_1855137_coffee_mug_1.3ds";
import * as THREE from 'three';
import {useLoader} from "react-three-fiber";
import {TDSLoader} from 'three/addons/loaders/TDSLoader';
import {MeshStandardMaterial} from "three";

export const MyMugModel = ({photo}) => {
    const group = useRef();
    const mugModel = useLoader(TDSLoader, modelPath);

    mugModel.scale.set(20, 20, 20);
    // mugModel.position.set(0, 0, 0);


    return (
        <mesh  ref={group}>
            <primitive object={mugModel} />
        </mesh>
    );
}