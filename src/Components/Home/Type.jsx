import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Typewriter from "typewriter-effect";

export const Type = () => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);  

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
