import React from 'react';



function Dashboard(props) {
    console.log(props);
    return (
        <div className='dashbordContainer'>
        <button onClick={props.addStrike}>Add Strike</button>
        <button onClick={props.addBall}>Add Ball</button>
        <button onClick={props.addFoul}>Add Foul</button>
        <button onClick={props.addHit}>Add Hit</button>
        </div>
    )
}

export default Dashboard;