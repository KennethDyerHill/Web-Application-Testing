import React, { useState } from "react";

export const addStrike = currentStrikes => {
    if (currentStrikes >= 2) {
        return 0;
    } else {
        return currentStrikes + 1;
    }
};

export const addBall = currentBalls => {
    if (currentBalls >= 3) {
        return 0;
    } else {
        return currentBalls + 1;
    }
};

export const addFoul = currentStrikes => {
    if (currentStrikes >= 2) {
        return currentStrikes;
    } else {
        return currentStrikes + 1;
    }
};

export const addHit = currentValue => {
    return (currentValue = 0);
};

export default function Dashboard() {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    return (
        <div>
    )
}