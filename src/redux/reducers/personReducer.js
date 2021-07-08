import * as types from "../../constants";

const InitialState = {
  prefix: [],
  suffix: [],
};

export const personReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.FETCH_NAMEPREFIX_SUCCESS:
      return {
        ...state,
        prefix: action.payload,
      };
    case types.FETCH_NAMESUFFIX_SUCCESS:
      return {
        ...state,
        suffix: action.payload,
      };

    default:
      return state;
  }
};
