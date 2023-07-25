

import { configureStore } from "@reduxjs/toolkit"
import { projectReducer } from "./reducers/project";
import { userReducer } from "./reducers/user";

const store = configureStore({
   reducer: {
      project: projectReducer,
      user: userReducer
   }
})

export default store;