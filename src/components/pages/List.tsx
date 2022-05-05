import { VFC } from "react";
import { Link } from "react-router-dom";
import { Quiz } from "../../data/quiz";

interface Props {
    quizList: Quiz[],
    remove: (quiz: Quiz) => void
}

const List: VFC<Props> = ({
    quizList,
    remove = () => undefined,
}) => (
    <>
        <h1>問題管理ページ</h1>
        <Link to="/register">追加</Link>
        {quizList.map((quiz: Quiz) => (
            <div key={quiz.id} style={{display: "flex"}}>
                <p>{quiz.text}</p>
                <Link to={`/change/${quiz.id}`}>編集</Link>
                <input type="button" value="削除" onClick={() => remove(quiz)} />
            </div>
        ))}
        <Link to="/">TOPへ戻る</Link>
    </>
)

export default List;
