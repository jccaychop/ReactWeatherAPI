import { URL_GET_LOCATION } from "../environments/environments";
import { API_KEY_IPGEOLOCATION } from '../apiKeys';


export const getLocation = async () => {
    const resp = await fetch(`${URL_GET_LOCATION}/ipgeo?apiKey=${API_KEY_IPGEOLOCATION}`);
    const data = await resp.json();

    return data;
}
