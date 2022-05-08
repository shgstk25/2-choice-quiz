import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../data/question";

type QuestionState = {
    questionList: Question[]
};

const initialState: QuestionState = {
    questionList: [
        {
            id: "0",
            text: "Aはどれでしょう？",
            choices: ["A", "B", "C", "D"],
            correct: 0
        },
        {
            id: "1",
            text: "Bはどれでしょう？",
            choices: ["A", "B", "C", "D"],
            correct: 1
        },
        {
            id: "2",
            text: "Cはどれでしょう？",
            choices: ["A", "B", "C", "D"],
            correct: 2
        },
        {
            id: "3",
            text: "Dはどれでしょう？",
            choices: ["A", "B", "C", "D"],
            correct: 3
        }
    ]
};

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        added: (state, action: PayloadAction<Question>) => ({
            ...state,
            questionList: state.questionList.concat(action.payload)
        }),
        changed: (state, action: PayloadAction<Question>) => ({
            ...state,
            questionList: state.questionList.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload
                }
                return v;
            })
        }),
        removed: (state, action: PayloadAction<Question>) => ({
            ...state,
            questionList: state.questionList.filter((v) => v.id !== action.payload.id)
        })
    }
});
