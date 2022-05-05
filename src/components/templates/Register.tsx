import { VFC, useRef } from "react";
import { Link } from "react-router-dom";

interface Props {
    register: (text: string|undefined, ans: boolean|undefined) => void
}

const Register: VFC<Props> = ({
    register = () => undefined,
}) => {
    const textRef = useRef<HTMLInputElement>(null);
    const ansRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <h1>問題登録ページ</h1>
            <p>問題文</p>
            <input type="text" ref={textRef} />
            <p>正答（○ならチェックを付けて、×ならチェックを外して登録してください）</p>
            <input type="checkbox" value={1} ref={ansRef} />
            <br />
            <input type="button" value="追加" onClick={() => register(textRef.current?.value, ansRef.current?.checked)} />
            <br />
            <Link to="/list">問題管理ページへ戻る</Link>
            <br />
            <Link to="/">TOPへ戻る</Link>
        </>
    )
}

export default Register;
