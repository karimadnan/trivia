import React, { Dispatch, SetStateAction } from 'react';
import OptionsMenu from './OptionsMenu';

interface Props {
    gameState: string;
    noq: number;
    setNoq: Dispatch<SetStateAction<number>>;
    difficulty: string;
    setDifficulty: Dispatch<SetStateAction<string>>;
}

const RightPanel: React.FC<Props> = ({ noq, setNoq, difficulty, setDifficulty }) => {
    return (
        <div className='game-panel-right'>
            <OptionsMenu noq={noq} setQuestions={setNoq} dif={difficulty} setDifficulty={setDifficulty} />
        </div>
    )
}

export default RightPanel;