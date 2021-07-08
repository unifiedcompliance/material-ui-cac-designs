import * as types from "../../constants/index";
import {
  prefixName as getPrefixName,
  suffixName as getSuffixName,
} from "../../services/personService";

export function prefixName() {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_NAMEPREFIX_REQUEST });

    getPrefixName()
      .then((response) => {
        dispatch({
          type: types.FETCH_NAMEPREFIX_SUCCESS,
          payload: response["@set"],
        });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_NAMEPREFIX_FAILURE });
        throw error;
      });
  };
}

export function suffixName() {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_NAMESUFFIX_REQUEST });

    getSuffixName()
      .then((response) => {
        dispatch({
          type: types.FETCH_NAMESUFFIX_SUCCESS,
          payload: response["@set"],
        });
      })
      .catch((error) => {
        dispatch({ type: types.FETCH_NAMESUFFIX_FAILURE });
        throw error;
      });
  };
}
