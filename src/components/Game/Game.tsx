import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionsState } from '../../APIs/fetchQuestions';
import { NOQ, GState } from './_config';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';

const Game: React.FC = () => {
    const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY)
    const [noq, setNoq] = useState<number>(NOQ[0]);
    const [gameState, setGameState] = useState<string>(GState.WAITING)

    const startGame = async (): Promise<QuestionsState[]> => {
        const payload = await fetchQuizQuestions(noq, difficulty);
        console.log(payload, "PAYLOAD");
        return payload
    };

    return (
        <div className='game-panel'>
            <LeftPanel startGame={startGame} gameState={gameState} />
            <RightPanel 
                gameState={gameState}
                noq={noq}  
                setNoq={setNoq} 
                difficulty={difficulty} 
                setDifficulty={setDifficulty}/>
        </div>
    )
};

export default Game;
