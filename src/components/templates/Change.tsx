import { VFC, useRef } from "react";
import { Link } from "react-router-dom";
import { Quiz } from "../../data/quiz";

interface Props {
    quiz: Quiz,
    change: (text: string|undefined, ans: boolean|undefined) => void,
    remove: (quiz: Quiz) => void
}

const Change: VFC<Props> = ({
    quiz,
    change = () => undefined,
    remove = () => undefined
}) => {
    const textRef = useRef<HTMLInputElement>(null);
    const ansRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <h1>問題変更ページ</h1>
            <p>問題文</p>
            <input type="text" ref={textRef} defaultValue={quiz.text} />
            <p>正答（○ならチェックを付けて、×ならチェックを外して登録してください）</p>
            <input type="checkbox" value={1} ref={ansRef} defaultChecked={quiz.ans} />
            <br />
            <input type="button" value="変更" onClick={() => change(textRef.current?.value, ansRef.current?.checked)} />
            <input type="button" value="削除" onClick={() => remove(quiz)} />
            <br />
            <Link to="/list">問題管理ページへ戻る</Link>
            <br />
            <Link to="/">TOPへ戻る</Link>
        </>
    )
}

export default Change;
