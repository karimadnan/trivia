import React from 'react';
import { QuestionsState } from '../../APIs/fetchQuestions';

interface ScreenProps {
    startGame: () => Promise<QuestionsState[]>;
};

interface Props extends ScreenProps {
    gameState: string;
}

const StartScreen: React.FC<ScreenProps> = ({ startGame }) => {
    return (
        <>
            <div className='game-logo' />
            <div className='game-start-btn' onClick={startGame}>Start</div>
        </>
    )
}

const LeftPanel: React.FC<Props> = ({ startGame, gameState }) => {
    return (
        <div className='game-panel-left'>
            <StartScreen startGame={startGame} />
        </div>
    )
}

export default LeftPanel;