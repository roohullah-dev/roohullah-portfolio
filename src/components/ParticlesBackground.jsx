// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 16,
            density: {
              enable: true,
              area: 1600,
            },
          },

          color: {
            value: "#ffffff",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.1,
          },

          size: {
            value: { min: 3, max: 6 },
          },

          move: {
            enable: true,
            speed: 0.12,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },

        interactivity: {
          events: {
            resize: true,
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
