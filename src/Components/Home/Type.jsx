import React from "react";
import { useTranslation } from "react-i18next";

import Typewriter from "typewriter-effect";

export const Type = () => {
    const { t } = useTranslation();

    return (
        <>
            <Typewriter
                options={{
                    strings: [
                        t('type.full'),
                        t('type.front'),
                        t('type.atleta'),
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </>
    );
};
