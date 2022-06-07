import { VFC } from "react";
import { useSelector } from "react-redux";
import Exam from "../../components/pages/Exam"
import { Question } from "../../data/question";
import { RootState } from "../../store";

const EnhancedExam: VFC = () => {
    const questionList = useSelector<RootState, Question[]>((state) => state.question.questionList);

    const getScore = (selected: Array<number>) => {
        let cnt = 0;
        for (let i = 0; i < questionList.length; i++) {
            if (questionList[i].correct === selected[i]) {
                cnt++;
            }
        }
        return cnt / questionList.length * 100;
    };

    return (<Exam questionList={questionList} getScore={getScore} />);
};

export default EnhancedExam;
