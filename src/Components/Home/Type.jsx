import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
    return (
        <>
            <Typewriter
                options={{
                    strings: [
                        "Desenvolvedor Full Stack",
                        "Especialista em Front-End",
                        "Atleta Amador de Vôlei",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </>
    );
};
