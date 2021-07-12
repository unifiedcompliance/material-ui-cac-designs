import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import { countryReducer } from "./countryReducer";
import { personReducer } from "./personReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  Countrys: countryReducer,
  Persons: personReducer,
});
