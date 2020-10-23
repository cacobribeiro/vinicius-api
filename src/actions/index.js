import { getCurrentISSLocation } from '../service/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const REQUEST_ISS_LOCATION_SUCCESS = 'REQUEST_ISS_LOCATION_SUCCESS';

// Actions retornam objetos
const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});
// Actions retornam objetos
const receiveISSLocationSuccess = ({ iss_position: { latitude, longitude } }) => ({
  type: REQUEST_ISS_LOCATION_SUCCESS,
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude),
});

// Action Assincrono Creator Retorna uma Funcao Com o Thunk
export function fetchISSLocation() {
  return (dispatch) => {
    dispatch(requestISSLocation());

    return getCurrentISSLocation().then((location) =>
      dispatch(receiveISSLocationSuccess(location)),
    );
  };
}
