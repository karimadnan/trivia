import React, { useState, Dispatch, SetStateAction } from 'react';
import { Difficulty } from '../../APIs/fetchQuestions';

const NOQ = [5, 10, 15];
const DIFS = Object.values(Difficulty);

type QuestionsN = {
    noq: number[];
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
};


type DifProps = {
    difs: string[];
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
};

const DifBtns: React.FC<DifProps> = ({ difs, value, setValue }) => {
    return (
        <div className='difs-btn'>
            {difs.map((d) => <div key={d} onClick={() => setValue(d)} className={`difs-btn-${d} ${value === d && `selected`}`}>{d}</div>)}
        </div>
    )
};

const NoqBtns: React.FC<QuestionsN> = ({ noq, value, setValue }) => {
    return (
        <div className='noq'>
            {noq.map((n) => <div key={n} onClick={() => setValue(n)} className={`noq-btn ${value === n && `selected`}`}>x{n}</div>)}
        </div>
    )
};

const Game: React.FC = () => {
    const [diffculty, setDiffculty] = useState<string>(Difficulty.EASY)
    const [diffculties] = useState<string[]>(DIFS)
    const [noq, setNoq] = useState<number>(NOQ[0]);

    return (
        <div className='game-panel'>
            <div className='game-panel-left'>
                <h1>?</h1>
            </div>
            <div className='game-panel-right'>
                <div>
                <label>Number of Questions</label>
                    <NoqBtns noq={NOQ} value={noq} setValue={setNoq} />
                <label>Select Diffculty</label>
                    <DifBtns difs={diffculties} value={diffculty} setValue={setDiffculty} />
                </div>
            </div>
        </div>
    )
};

export default Game;
