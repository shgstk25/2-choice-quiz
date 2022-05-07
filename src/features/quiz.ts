import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../data/quiz";

type QuizState = {
    quizList: Quiz[]
};

const initialState: QuizState = {
    quizList: [
        {
            id: "0",
            text: "テストデータです。",
            ans: true
        }
    ]
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        added: (state, action: PayloadAction<Quiz>) => ({
            ...state,
            quizList: state.quizList.concat([action.payload])
        }),
        edited: (state, action: PayloadAction<Quiz>) => ({
            ...state,
            quizList: state.quizList.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                }
                return v
            })
        }),
        removed: (state, action: PayloadAction<Quiz>) => ({
            ...state,
            quizList: state.quizList.filter((v) => v.id !== action.payload.id)
        })
    }
})
