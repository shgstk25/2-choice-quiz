import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quiz } from "../data/quiz";

type AnswerState = {
    ansList: Quiz[]
};

const initialState: AnswerState = {
    ansList: [
        {
            id: "0",
            text: "テストデータです。",
            ans: true
        }
    ]
};

export const ansSlice = createSlice({
    name: "ans",
    initialState,
    reducers: {
        seted: (state, action: PayloadAction<Quiz[]>) => ({
            ...state,
            ansList: action.payload.map((v) => ({ ...v, ans: false }))
        }),
        selected: (state, action: PayloadAction<Quiz>) => ({
            ...state,
            ansList: state.ansList.map((v) => {
                console.log(v)
                if (v.id === action.payload.id) {
                    return action.payload
                }
                return v
            })
        })
    }
})
