import React, { memo } from 'react';

export const FormularioLanguageItems = memo(({ language }) => {
    // console.log("language items");
    return (
        <option value={language.id}>{language.lang}</option>
    )
})
