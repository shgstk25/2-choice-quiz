import { VFC } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../containers/organisms/InputForm";

interface Props {
    id: string
};

const Edit: VFC<Props> = ({ id }) => (
    <>
        <h1>問題編集ページ</h1>
        <InputForm id={id}></InputForm>
        <p><Link to="/list">問題管理ページへ戻る</Link></p>
        <p><Link to="/">TOPへ戻る</Link></p>
    </>
);

export default Edit;
