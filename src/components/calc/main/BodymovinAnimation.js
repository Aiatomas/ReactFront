import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

function BodymovinAnimation({ animationData, classname }) {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
    }, [animationData]);

    return <div className={classname} ref={container} />;
}

export default BodymovinAnimation;