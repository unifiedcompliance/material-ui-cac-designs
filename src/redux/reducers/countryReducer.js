import * as types from "../../constants";

const InitialState = {
  country: [],
  state: [],
  city: [],
};

export const countryReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
      };
    case types.FETCH_STATE_SUCCESS:
      return {
        ...state,
        state: action.payload,
      };
    case types.FETCH_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};
