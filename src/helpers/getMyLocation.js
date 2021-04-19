import { API_KEY_IPGEOLOCATION } from "../apiKeys";
import { URL_GET_LOCATION } from "../environments/environments";

export const getMyLocation = async () => {
    // console.log("PROCEES",process.env.REACT_APP_API_KEY_IPGEOLOCATION);
    const resp = await fetch(`${URL_GET_LOCATION}/ipgeo?apiKey=${API_KEY_IPGEOLOCATION}`);
    const data = await resp.json();

    return data;
}
