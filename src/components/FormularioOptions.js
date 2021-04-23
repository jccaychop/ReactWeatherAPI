import React, { useContext, useState } from 'react';
import { languages } from './../options/language';
import { FormularioLanguageItems } from './FormularioLanguageItems';
import PrincipalContext from './../principal/PrincipalContext';

export const FormularioOptions = () => {

    const { options, setOptions } = useContext(PrincipalContext);
    const { metric, metricSymbol, idLanguage } = options;
    const [formulario, setFormulario] = useState({
        idLang: idLanguage,
        simbolo: metricSymbol,
        metrica: metric
    });

    const handleChange = (e) => {
        let valor = e.target.value;
        let simb = "";

        if (e.target.name === 'metrica') {
            switch (valor) {
                case 'metric':
                    simb = 'C';
                    setFormulario({
                        ...formulario,
                        [e.target.name]: valor,
                        simbolo: simb
                    });
                    break;

                case 'imperial':
                    simb = 'F';
                    setFormulario({
                        ...formulario,
                        [e.target.name]: valor,
                        simbolo: simb
                    });
                    break;

                default:
                    simb = 'K';
                    setFormulario({
                        ...formulario,
                        [e.target.name]: valor,
                        simbolo: simb
                    });
                    break;
            }
        } else {
            setFormulario({
                ...formulario,
                [e.target.name]: valor,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOptions(formulario);
    }

    return (
        <form className="form-inline d-flex justify-content-center" onSubmit={handleSubmit}>
            <div>
                <div className="form-group mx-sm-3 mb-2">
                    <select
                        className="form-control"
                        name='metrica'
                        value={formulario.metrica}
                        onChange={handleChange}
                    >
                        <option value="metric">°C</option>
                        <option value="imperial">°F</option>
                        <option value="standard">°K</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="form-group mx-sm-3 mb-2">
                    <select
                        className="form-control"
                        name='idLang'
                        value={formulario.idLang}
                        onChange={handleChange}
                    >
                        {
                            languages.map(language => {
                                return <FormularioLanguageItems key={language.id} language={language} />
                            })
                        }
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-primary mb-2">SET</button>
            </div>
        </form>
    )
}
