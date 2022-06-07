import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "./features/question";

const reducer = combineReducers({
    question: questionSlice.reducer
});

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
