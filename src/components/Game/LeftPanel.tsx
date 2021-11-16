import React, { Dispatch, SetStateAction } from 'react';
import { QuestionsState } from '../../APIs/fetchQuestions';
import { GState } from './_config';
import QuestionsScreen from './QuestionsScreen';

interface ScreenProps {
    startGame: () => Promise<void>;
    gameState: string;
};

interface Props extends ScreenProps {
    questions: QuestionsState[];
    progress: number;
    answerQuestion: (answer: string) => void;
}

const StartScreen: React.FC<ScreenProps> = ({ startGame, gameState }) => {
    const isWaiting = gameState === GState.WAITING;

    return (
        <>
            <div className='game-logo' />
            <div className={`game-start-btn-${isWaiting ? 'enabled' : 'disabled'}`} onClick={startGame}>
                {isWaiting ? 'Start' : 'Loading...'}
            </div>
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
            {gameState === GState.WAITING || gameState === GState.LOADING ? 
                <StartScreen startGame={startGame} gameState={gameState} /> :
            gameState === GState.STARTED ?
                <QuestionsScreen questions={questions} progress={progress} answerQuestion={answerQuestion} /> :undefined
            }
        </div>
    )
}

export default LeftPanel;