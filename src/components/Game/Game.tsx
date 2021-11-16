import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionsState } from '../../APIs/fetchQuestions';
import { NOQ, GState } from './_config';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';

const Game: React.FC = () => {
    const [difficulty, setDifficulty] = useState<string>(Difficulty.EASY)
    const [noq, setNoq] = useState<number>(NOQ[0]);
    const [gameState, setGameState] = useState<string>(GState.WAITING)
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [score, setScore] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);

    const startGame = async (): Promise<void> => {
        if (gameState !== GState.WAITING) return;
        setGameState(GState.LOADING);
        const payload = await fetchQuizQuestions(noq, difficulty);
        setQuestions(payload);
        setGameState(GState.STARTED);
    };

    const answerQuestion = (answer: string): void => {
        if (answer === questions[progress].correct_answer) {
            setProgress(prevProgress => prevProgress + 1);
            setScore(prevScore => prevScore + 100);
        } else {
            setScore(prevScore => prevScore - 100);
        };
    };

    return (
        <div className='game-panel'>
            <LeftPanel 
                startGame={startGame} 
                gameState={gameState}
                questions={questions}
                progress={progress}
                answerQuestion={answerQuestion} />
            <RightPanel 
                gameState={gameState}
                score={score}
                progress={progress}
                noq={noq}  
                setNoq={setNoq} 
                difficulty={difficulty} 
                setDifficulty={setDifficulty} />
        </div>
    )
};

export default Game;
