import { useState, VFC } from "react";
import { Link } from "react-router-dom";
import { Question } from "../../data/question";

interface Props {
    questionList: Question[],
    getScore: (selected: Array<number>) => void
};

const Exam: VFC<Props> = ({
    questionList,
    getScore = () => undefined
}) => {
    const [index, setIndex] = useState<number>(0);
    const [selected, setSelected] = useState<number[]>(new Array<number>(questionList.length).fill(-1));

    return (
        <>
            {
                index < questionList.length &&
                <>
                    <h1>試験ページ</h1>
                    <p>Q{index + 1}</p>
                    <p>問題文</p>
                    <p>{questionList[index].text}</p>
                    {
                        questionList[index].choices.map((v, i) => (
                            <p key={i}>
                                <label>
                                    <input type="radio" name="choices" checked={i === selected[index]} value={i} onChange={(e) => setSelected(selected.map((w, j) => {
                                        if (j === index) {
                                            return parseInt(e.target.value);
                                        }
                                        return w;
                                    }))} />{v}
                                </label>
                            </p>
                        ))
                    }
                    {index !== 0 && <input type="button" value="前に戻る" onClick={() => setIndex(index - 1)} />}
                    {index !== questionList.length - 1 && <input type="button" value="次に進む" onClick={() => setIndex(index + 1)} />}
                    {index === questionList.length - 1 && <input type="button" value="確認へ" onClick={() => setIndex(questionList.length)} />}
                </>
            }
            {
                index === questionList.length &&
                <>
                    <h1>確認ページ</h1>
                    {
                        questionList.map((question: Question, i: number) => (
                            <div key={question.id} style={{display: "table", width: "30%", tableLayout: "fixed"}}>
                                <p style={{display: "table-cell"}}>Q{i + 1}</p>
                                <p style={{display: "table-cell"}}>{question.text}</p>
                                <p style={{display: "table-cell"}}>{question.choices[selected[i]]}</p>
                                <div  style={{display: "table-cell"}}>
                                    <input type="button" value="見直し" onClick={() => setIndex(i)} />
                                </div>
                            </div>
                        ))
                    }
                    <input type="button" value="結果へ" onClick={() => setIndex(questionList.length + 1)} />
                </>
            }
            {
                index > questionList.length &&
                <>
                    <h1>結果ページ</h1>
                    あなたの得点は{getScore(selected)}点です<br />
                    <Link to="/" replace>試験を終了する</Link>
                </>
            }
        </>
    )
};

export default Exam;
