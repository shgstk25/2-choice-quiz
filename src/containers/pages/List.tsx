import { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/pages/List";
import { Question } from "../../data/question";
import { questionSlice } from "../../features/question";
import { RootState } from "../../store";
import { confirmDialog } from "../../utils/dialog";

const EnhancedList: VFC = () => {
    const questionList = useSelector<RootState, Question[]>((state) => state.question.questionList);
    const dispatch = useDispatch();
    const { removed } = questionSlice.actions;

    const remove = (question: Question) => {
        if (question === undefined) {
            return;
        }
        confirmDialog("削除してもよろしいですか？").then(() => {
            dispatch(removed(question));
        });
    };

    return (
        <List
            questionList={questionList}
            remove={(question: Question) => remove(question)}
        />
    );
};

export default EnhancedList;
