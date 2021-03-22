import { combineReducers } from "redux";

import { moduleReducer } from "./module-reducer";
import { lessonReducer, selectModule } from "./lesson-reducer";
import { topicReducer, selectLesson } from "./topic-reducer";
import { widgetReducer } from "./widget-reducer";
import { mIdReducer } from "./module_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  modules: moduleReducer,
  lessons: lessonReducer,
  selectModule: selectModule,
  topics: topicReducer,
  selectLesson: selectLesson,
  mId: mIdReducer,
  widgetReducer: widgetReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

export default persistReducer(persistConfig, rootReducer);

export function* rootSaga() {}
