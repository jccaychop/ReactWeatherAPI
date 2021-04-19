import { types } from "../types/types";

export const PrincipalReducer = (stateActual = {}, action) => {
    switch (action.type) {
        case types.options:
            return {
                ...stateActual,
                options: action.data.options
            }

        case types.myLocation:
            return {
                ...stateActual,
                myLocation: action.data.myLocation,
            }

        case types.myLocationWeather:
            return {
                ...stateActual,
                myLocationWeather: action.data.myLocationWeather,
                loading: false
            }

        case types.myLocationWeatherForecast:
            return {
                ...stateActual,
                myLocationWeatherForecast: action.data.myLocationWeatherForecast
            }

        default:
            return stateActual;
    }
}
