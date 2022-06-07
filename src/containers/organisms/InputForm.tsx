import { VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import InputForm from "../../components/organisms/InputForm";
import { Input } from "../../data/input";
import { Question } from "../../data/question";
import { questionSlice } from "../../features/question";
import { RootState } from "../../store";
import { confirmDialog } from "../../utils/dialog";

interface Props {
    id: string | undefined
};

const EnhancedInputForm: VFC<Props> = ({ id = undefined }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const question = useSelector<RootState, Question[]>((state) => state.question.questionList).find((v) => v.id === id)
    const { added, changed, removed } = questionSlice.actions;

    const valid = (input: Input) => {
        if (input.text === "") {
            alert("問題文を入力してください");
            return false;
        }
        for (let i = 0; i < input.choices.length; i++) {
            if (input.choices[i] === "") {
                alert(`${i + 1}つ目の選択肢を入力してください`);
                return false;
            }
        }
        if (input.correct === "") {
            alert("正解を選択してください");
            return false;
        }
        return true;
    }

    const register = (input: Input) => {
        if (!valid(input)) {
            return;
        }
        dispatch(added({
            ...input,
            id: new Date().getTime().toString(),
            correct: parseInt(input.correct)
        }));
        navigate("/list");
    };

    const change = (input: Input) => {
        if (!valid(input)) {
            return;
        }
        if (question === undefined) {
            return;
        }
        dispatch(changed({
            ...input,
            id: question.id,
            correct: parseInt(input.correct)
        }));
        navigate("/list");
    };

    const remove = () => {
        if (question === undefined) {
            return;
        }
        confirmDialog("削除してもよろしいですか？").then(() => {
            dispatch(removed(question));
            navigate("/list");
        });
    };

    return (
        <InputForm
            question={question}
            register={(inputVal: Input) => register(inputVal)}
            change={(inputVal: Input) => change(inputVal)}
            remove={() => remove()}
        />
    );
};

export default EnhancedInputForm;
