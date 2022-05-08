import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Question } from "../data/question";

type AnswerState = {
    answerList: Answer[]
};

const initialState: AnswerState = {
    answerList: []
};

export const answerSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        seted: (state, action: PayloadAction<Question[]>) => ({
            ...state,
            answerList: action.payload.map((v) => ({ ...v, selected: null }))
        }),
        selected: (state, action: PayloadAction<Answer>) => ({
            ...state,
            answerList: state.answerList.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                }
                return v;
            })
        })
    }
});
