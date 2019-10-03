import React from "react";
import { addBall, addStrike } from "./Dashboard";

export default function Display() {
    return (
        <div>
            <h1>Current Batter</h1>
            <p>Ball: </p>
            <p>{addBall}</p>
            <p>Strikes: </p>
            <p>{addStrike}</p>
        </div>
    );
}