    document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("background", { 
        fpsLimit: 60,
        background: {
            color: "transparent",
        },
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 },
            },
            color: { value: ["#83009D", "#00BD9D"] },
            shape: { type: "circle" },
            opacity: {
                value: 0.6,
                random: true,
            },
            size: {
                value: 3,
                random: true,
            },
            move: {
                enable: true,
                speed: 3.5,
                direction: "none",
                outModes: { default: "out" },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#83009D",
                opacity: 0.3,
                width: 1,
            },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        detectRetina: true,
    });
});
    // tsParticles.load("background", {
    //     fpsLimit: 60,
    //     background: {
    //         color: "transparent",
    //     },
    //     particles: {
    //         number: {
    //             value: 50,
    //             density: { enable: true, value_area: 800 },
    //         },
    //         color: { value: ["#83009D", "#00BD9D"] },
    //         shape: { type: "circle" },
    //         opacity: {
    //             value: 0.6,
    //             random: true,
    //         },
    //         size: {
    //             value: 3,
    //             random: true,
    //         },
    //         move: {
    //             enable: true,
    //             speed: 1.2,
    //             direction: "none",
    //             outModes: { default: "out" },
    //         },
    //         links: {
    //             enable: true,
    //             distance: 150,
    //             color: "#83009D",
    //             opacity: 0.3,
    //             width: 1,
    //         },
    //     },
    //     interactivity: {
    //         events: {
    //             onHover: { enable: true, mode: "repulse" },
    //             resize: true,
    //         },
    //         modes: {
    //             repulse: { distance: 100, duration: 0.4 },
    //         },
    //     },
    //     detectRetina: true,
    // });
