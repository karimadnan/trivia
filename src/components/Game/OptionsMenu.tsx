import React, { Dispatch, SetStateAction } from 'react';
import { Difficulty} from '../../APIs/fetchQuestions';
import { NOQ } from './_config';

const DIFS = [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];

interface DifProps {
    dif: string;
    setDifficulty: Dispatch<SetStateAction<string>>;
}

interface QuestionsN {
    noq: number;
    setQuestions: Dispatch<SetStateAction<number>>;
}

interface Props extends DifProps, QuestionsN {}

const DifBtns: React.FC<DifProps> = ({ dif, setDifficulty }) => {
    return (
        <div className='difs-btn'>
            {DIFS.map((d) => 
            <div 
                key={d} 
                onClick={() => setDifficulty(d)} 
                className={`difs-btn-${d} ${dif === d && `selected`}`}>
                    {d}
            </div>)}
        </div>
    )
};

const NoqBtns: React.FC<QuestionsN> = ({ noq, setQuestions }) => {
    return (
        <div className='noq'>
            {NOQ.map((n) => 
            <div 
                key={n} 
                onClick={() => setQuestions(n)} 
                className={`noq-btn ${noq === n && `selected`}`}>
                    x{n}
            </div> )}
        </div>
    )
};

const OptionsMenu: React.FC<Props> = ({ noq, setQuestions, dif, setDifficulty  }) => {

    return (
        <div>
            <label>Number of Questions</label>
                <NoqBtns noq={noq} setQuestions={setQuestions} />
            <label>Select Diffculty</label>
                <DifBtns dif={dif} setDifficulty={setDifficulty} />
        </div>
    )
}

export default OptionsMenu;