import React, { memo } from 'react';

export const FormularioLanguageItems = memo(({ language }) => {
    return (
        <option value={language.id}>{language.lang}</option>
    )
})
