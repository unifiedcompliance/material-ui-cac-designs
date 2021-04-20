import * as types from "../../constants";
import { THEMES } from "../../constants";

const initialState = {
  currentTheme: THEMES.DEFAULT,
  toggleSidebar: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.THEME_SET:
      return {
        ...state,
        currentTheme: actions.payload,
      };
    case types.TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSidebar: actions.payload,
      };
    default:
      return state;
  }
}
