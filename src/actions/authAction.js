// Example action creators
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const login = (username, password) => async dispatch => {
  try {
    // Perform login API call
    const response = await api.login(username, password);

    // Dispatch success action
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    // Dispatch failure action
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
