import React, {useState} from 'react';
import Dashboard from './Dashboard';

function Display() {
    
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [hits, setHits] = useState(0);
    const [fouls, setFouls] = useState(0);

    if(balls === 4 || strikes === 3) {
        setBalls(0);
        setStrikes(0);
    }

    const addBall = () => {
        setBalls(balls + 1)
    }

     const addStrike = () => {
        setStrikes(strikes + 1)
    }

    const addFoul = () => {
        setStrikes(strikes + 2)
    }

    const addHit = () => {
        setHits(hits + 1)
    }

    const reset = () => {
        setBalls(0);
        setStrikes(0);
        setHits(0);
    }

    return (
        <div className='displayContainer'>
            <h3>Strikes: {strikes}</h3>
            <h3>Balls: {balls}</h3>
            {/* <h3>Fouls: {fouls}</h3> */}
            <h3>Hits: {hits}</h3>
            <button onClick={reset}>Reset All</button>
            <Dashboard addBall={addBall} addStrike={addStrike} addHit={addHit} addFoul={addFoul}/> 

        </div>
    )
}

export default Display;