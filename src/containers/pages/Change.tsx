import { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import Change from "../../components/pages/Change"
import { Quiz } from "../../data/quiz";
import { quizSlice, QuizState } from "../../features/quiz"

const EnhancedChange: VFC = () => {
    const { id = "" } = useParams();
    const quiz = useSelector<QuizState, Quiz[]>((state) => state.quizList).find((v) => v.id === id)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { edited, removed } = quizSlice.actions;

    const change = (text: string|undefined, ans: boolean|undefined) => {
        if (text === undefined || text === "") {
            alert("問題文を入力してください")
            return;
        }
        dispatch(edited({
            id: id,
            text: text,
            ans: !!ans
        }))
        navigate("/list")
    }

    const remove = (quiz: Quiz) => {
        dispatch(removed(quiz))
        navigate("/list")
    }

    if (quiz === undefined) {
        return (
            <Navigate to="/change" replace />
        )
    }

    return (
        <Change
            quiz={quiz}
            change={(text: string|undefined, ans: boolean|undefined) => change(text, ans)}
            remove={(quiz: Quiz) => remove(quiz)}
        />
    )
}

export default EnhancedChange;
