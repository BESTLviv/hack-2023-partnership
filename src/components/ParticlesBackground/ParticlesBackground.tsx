import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Engine} from 'tsparticles-engine';

interface ParticlesBackgroundProps {
    children: React.ReactNode;
}

const ParticlesBackground = ({children}: ParticlesBackgroundProps) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    const particlesOptions: any = {
        background: {
            color: {
                value: "#000",
            },
        },
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 900,
                },
            },
            color: {
                value: ["#ffffff"],
            },
            shape: {
                type: ["circle"],
                stroke: {
                    width: 0,
                    color: "#ffffff",
                },
                polygon: {
                    nb_sides: 7,
                },
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#56fc03",
                opacity: 0.6,
                width: 1.5,
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 800,
                    rotateY: 1600,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onclick: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 250,
                    size: 12,
                    duration: 3,
                    opacity: 0.4,
                    speed: 1,
                },
                repulse: {
                    distance: 200,
                    duration: 0.6,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <div style={{position: 'relative'}}>
            <Particles
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            />
            <div style={{position: 'relative', pointerEvents: 'none', zIndex: 1}}>
                {children}
            </div>
        </div>
    );
};

export default ParticlesBackground;
