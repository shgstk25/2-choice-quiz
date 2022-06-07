import { VFC } from "react";
import { Link } from "react-router-dom";
import { Question } from "../../data/question";

interface Props {
    questionList: Question[],
    remove: (quiz: Question) => void
};

const List: VFC<Props> = ({
    questionList,
    remove = () => undefined,
}) => (
    <>
        <h1>問題管理ページ</h1>
        <Link to="/register">追加</Link>
        {questionList.map((question: Question) => (
            <div key={question.id} style={{display: "flex"}}>
                <p>{question.text}</p>
                <Link to={`/edit/${question.id}`}>編集</Link>
                <input type="button" value="削除" onClick={() => remove(question)} />
            </div>
        ))}
        <Link to="/">TOPへ戻る</Link>
    </>
);

export default List;
