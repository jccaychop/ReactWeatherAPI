
import { URL_GET_IP } from './../environments/environments';

export const getMyIP = async () => {
    const resp = await fetch(URL_GET_IP);
    const { ip } = await resp.json();

    return ip;
}
