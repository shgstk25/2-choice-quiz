import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { answerSlice } from "./features/answer";
import { questionSlice } from "./features/question";

const reducer = combineReducers({
    answer: answerSlice.reducer,
    question: questionSlice.reducer
});

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
