type QuestionBase = {
    id: string,
    text: string,
    choices: string[]
};

export type Question = QuestionBase & {
    correct: number
};

export type Answer = QuestionBase & {
    selected: number | null
};
