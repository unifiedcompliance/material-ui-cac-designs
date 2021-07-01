import * as types from "../../constants/index";
import {
  country as getCountry,
  state as getState,
  city as getCity,
} from "../../services/countryServices";

export function country() {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_COUNTRY_REQUEST });

    getCountry()
      .then((response) => {
        dispatch({
          type: types.FETCH_COUNTRY_SUCCESS,
          payload: response["@set"],
        });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_COUNTRY_FAILURE });
        throw error;
      });
  };
}

export function state() {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_STATE_REQUEST });

    getState()
      .then((response) => {
        dispatch({
          type: types.FETCH_STATE_SUCCESS,
          payload: response["@set"],
        });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_STATE_FAILURE });
        throw error;
      });
  };
}

export function city() {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_CITY_REQUEST });

    getCity()
      .then((response) => {
        dispatch({
          type: types.FETCH_CITY_SUCCESS,
          payload: response["@set"],
        });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_CITY_FAILURE });
        throw error;
      });
  };
}
