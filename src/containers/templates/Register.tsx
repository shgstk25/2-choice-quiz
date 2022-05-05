import { VFC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Register from "../../components/templates/Register"
import { quizSlice } from "../../features/quiz"

const EnhancedRegister: VFC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { added } = quizSlice.actions;

    const register = (text: string|undefined, ans: boolean|undefined) => {
        if (text === undefined || text === "") {
            alert("問題文を入力してください")
            return;
        }
        dispatch(added({
            id: new Date().getTime().toString(),
            text: text,
            ans: !!ans
        }))
        navigate("/list")
    }

    return (
        <Register
            register={(text: string|undefined, ans: boolean|undefined) => register(text, ans)}
        />
    )
}

export default EnhancedRegister;
