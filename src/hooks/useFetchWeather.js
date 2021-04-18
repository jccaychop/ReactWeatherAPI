import { useEffect, useState } from "react";
import { getWeather } from "../helpers/getWeather";

export const useFetchWeather = (location = "", metric, lang) => {
    const [state, setState] = useState({
        weather: [],
        loading: true
    });

    useEffect(() => {
        if (location !== "") {
            getWeather(location, metric, lang)
                .then(data => {
                    setState({
                        weather: data,
                        loading: false
                    });
                });
        }
    }, [location, metric, lang]);

    return state;
}
