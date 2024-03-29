// @ts-ignore
import Particles from "react-tsparticles";
import { Box } from '@chakra-ui/react';
import { loadFull } from "tsparticles";


export function BackgroundProbableQuestions() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (<Box sx={{
        background: 'linear-gradient(0deg, #412100 0%, #400100 20%, #400000 45%, #03001d 70%)',
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: false,
                value_area: 800
              }
            },
            color: {
              value: "#fff"
            },
            shape: {
              character: {
                fill: true,
                font: "Verdana",
                style: "",
                value: [
                  "With great power comes great responsibility.",
                  "I can do this all day.",
                  "I'm Iron Man.",
                  "Wakanda forever!",
                  "That's my secret, Captain: I'm always angry.",
                  "I am Groot.",
                  "Higher, further, faster.",
                  "Part of the journey is the end.",
                  "I'm nothing without this suit.",
                  "This is what heroes do."
                ],
                weight: "400"
              },
            polygon: { nb_sides: 5 },
            stroke: { color: "#ffffff", width: 1 },
            type: "char",
              // "type": "star",
              options: {
                  // sides: 5
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 12,
              random: false,
              anim: {
                enable: false,
                speed: 30,
                size_min: 0.1,
                sync: false
              }
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                particles_nb: 2,
                line_linked: {
                  opacity: 0.7
                }
              },
              trail: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 2,
                opacity: 0.8,
                speed: 1
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 1
              },
              remove: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true,
          background: {
            // color: "#19202B",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
    </Box>
  );
}
