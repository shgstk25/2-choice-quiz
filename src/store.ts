import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ansSlice } from "./features/answer";
import { quizSlice } from "./features/quiz";

const reducer = combineReducers({
    ans: ansSlice.reducer,
    quiz: quizSlice.reducer
});

export const store = configureStore({
    reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;
