import { VFC } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../containers/organisms/InputForm";

const Register: VFC = () => (
    <>
        <h1>問題登録ページ</h1>
        <InputForm id={undefined}></InputForm>
        <p><Link to="/list">問題管理ページへ戻る</Link></p>
        <p><Link to="/">TOPへ戻る</Link></p>
    </>
);

export default Register;
