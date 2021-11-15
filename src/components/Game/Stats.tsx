import React from 'react';

interface Props {
    score: number;
    progress: number;
    noq: number;
}

const Stats: React.FC<Props> = ({ score, progress, noq }) => {
    return (
        <div>
            <label>Score</label>
            <h1>{score}</h1>
            <label>Progress</label>
            <h1>{progress} out of {noq}</h1>
        </div>
    )
}

export default Stats;