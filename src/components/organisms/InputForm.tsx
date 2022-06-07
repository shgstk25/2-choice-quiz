import { VFC, useState } from "react";
import { Input } from "../../data/input";
import { Question } from "../../data/question";

interface Props {
    question: Question | undefined,
    register: (inputVal: Input) => void,
    change: (inputVal: Input) => void,
    remove: () => void
};

const InputForm: VFC<Props> = ({
    question,
    register = () => undefined,
    change = () => undefined,
    remove = () => undefined
}) => {
    const isRegisterMode = question === undefined;
    
    const [text, setText] = useState<string>(isRegisterMode ? "" : question.text);
    const [choices, setChoices] = useState<string[]>(isRegisterMode ? [""] : question.choices);
    const [correct, setCorrect] = useState<string>(isRegisterMode ? "" : question.correct.toString());

    return (
        <>
            <p>問題文</p>
            <p><input type="text" defaultValue={text} onChange={(e) => setText(e.target.value)} /></p>
            <p>選択肢</p>
            {
                choices.map((v, i) => (
                    <p key={i}>
                        <span>{i + 1} : </span>
                        <input type="text" defaultValue={v} onChange={(e) => setChoices(choices.map((w, j) => j === i ? e.target.value : w))} />
                        <input type="button" value="選択肢を削除" onClick={() => setChoices(choices.filter((w, j) => j !== i))} />
                    </p>
                ))
            }
            <p><input type="button" value="選択肢を追加" onClick={() => setChoices([...choices, ""])} /></p>
            <p>正解</p>
            {
                choices.map((v, i) => (
                    <p key={i}>
                        <label>
                            <input type="radio" name="choices" defaultChecked={i.toString() === correct} value={i} onChange={(e) => setCorrect(e.target.value)} />{i + 1}
                        </label>
                    </p>
                ))
            }
            {
                isRegisterMode && <p>
                    <input type="button" value="登録" onClick={() => register({
                        text: text,
                        choices: choices,
                        correct: correct
                    })} />
                </p>
            }
            {
                !isRegisterMode && <p>
                    <input type="button" value="変更" onClick={() => change({
                        text: text,
                        choices: choices,
                        correct: correct
                    })} />
                    <input type="button" value="削除" onClick={() => remove()} />
                </p>
            }
        </>
    );
};

export default InputForm;
