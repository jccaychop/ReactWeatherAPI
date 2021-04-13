import { useEffect, useState } from "react";
import { getMyIP } from './../helpers/getMyIP';

export const useFetchMyIP = () => {
    const [state, setState] = useState({
        ip: [],
        loading: true
    });

    useEffect(() => {
        getMyIP()
            .then(ip => {
                setState({
                    ip: ip,
                    loading: false
                });
            });
    }, []);

    return state;
}
