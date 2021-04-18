import { useEffect, useState } from "react";
import { getLocation } from './../helpers/getLocation';

export const useFetchLocation = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getLocation()
            .then(data => {
                setState({
                    data: data,
                    loading: false
                });
            });
    }, []);

    return state;
}

