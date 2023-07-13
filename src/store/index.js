import { legacy_createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = legacy_createStore(rootReducer, devToolsEnhancer());
