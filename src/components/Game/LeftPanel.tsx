import React, { Dispatch, SetStateAction } from 'react';
import { QuestionsState } from '../../APIs/fetchQuestions';
import { GState } from './_config';
import QuestionsScreen from './QuestionsScreen';

interface ScreenProps {
    startGame: () => Promise<void>;
};

interface Props extends ScreenProps {
    gameState: string;
    questions: QuestionsState[];
    progress: number;
    answerQuestion: (answer: string) => void;
}

const StartScreen: React.FC<ScreenProps> = ({ startGame }) => {
    return (
        <>
            <div className='game-logo' />
            <div className='game-start-btn' onClick={startGame}>Start</div>
        </>
    )
}

const LeftPanel: React.FC<Props> = ({ 
    startGame, 
    gameState, 
    questions, 
    progress,
    answerQuestion
}) => {
    return (
        <div className='game-panel-left'>
            {gameState === GState.WAITING ? 
                <StartScreen startGame={startGame} /> :
            gameState === GState.STARTED ?
                <QuestionsScreen questions={questions} progress={progress} answerQuestion={answerQuestion} /> :
                <div className='game-panel-left-loading' />
            }
        </div>
    )
}

export default LeftPanel;