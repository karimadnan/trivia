import React, { Dispatch, SetStateAction } from 'react';
import { GState } from './_config';
import OptionsMenu from './OptionsMenu';
import Stats from './Stats';

interface Props {
    score: number;
    progress: number;
    gameState: string;
    noq: number;
    setNoq: Dispatch<SetStateAction<number>>;
    difficulty: string;
    setDifficulty: Dispatch<SetStateAction<string>>;
}

const RightPanel: React.FC<Props> = ({ 
    noq, 
    setNoq, 
    difficulty, 
    setDifficulty, 
    gameState,
    score,
    progress
 }) => {
    return (
        <div className='game-panel-right'>
            {gameState === GState.WAITING ? 
                <OptionsMenu noq={noq} setQuestions={setNoq} dif={difficulty} setDifficulty={setDifficulty} />:
            gameState === GState.STARTED ? 
                <Stats score={score} progress={progress} noq={noq} />:
                <div className='game-panel-right-loading' />}
        </div>
    )
}

export default RightPanel;