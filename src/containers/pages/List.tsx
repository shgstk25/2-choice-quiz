import { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/pages/List"
import { Quiz } from "../../data/quiz";
import { quizSlice, QuizState } from "../../features/quiz"

const EnhancedList: VFC = () => {
    const quizList = useSelector<QuizState, Quiz[]>((state) => state.quizList)
    const dispatch = useDispatch();
    const { removed } = quizSlice.actions;

    return (
        <List
            quizList={quizList}
            remove={(quiz: Quiz) => dispatch(removed(quiz))}
        />
    )
}

export default EnhancedList;
