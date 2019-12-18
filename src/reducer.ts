import { Reducer, combineReducers } from "redux";

import locationsReducer from "./reducers/locations-reducer";
import roomsReducer from "./reducers/rooms-reducer";
import appReducer from "./reducers/app-reducer";
import uiReducer from "./reducers/ui-reducer";

export const rootReducer: Reducer = combineReducers({
  locations: locationsReducer,
  rooms: roomsReducer,
  app: appReducer,
  ui: uiReducer
});
export type RootState = ReturnType<typeof rootReducer>;