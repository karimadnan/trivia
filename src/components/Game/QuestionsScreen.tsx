import React from 'react';
import { QuestionsState } from '../../APIs/fetchQuestions';

interface Props {
    questions: QuestionsState[];
    progress: number;
    answerQuestion: (answer: string) => void;
}

const QuestionsScreen: React.FC<Props> = ({ questions, progress, answerQuestion }) => {

    const handleAnswer = (answer: string):void => {
        answerQuestion(answer);
    };

    return (
        <div className='question-screen'>
            <div className='question'>
                {questions[progress].question}
            </div>
            <div className='answers'>
                {questions[progress].answers.map((a) => (
                    <div key={a} className='answer' onClick={() => handleAnswer(a)}>{a}</div>
                ))}
            </div>
        </div>
    )
}

export default QuestionsScreen;