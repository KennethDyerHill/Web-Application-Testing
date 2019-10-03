import React, { useState } from "react";

export const addStrike = currentStrikes => {
    if (currentStrikes >= 2) {
        return 0;
    } else {
        return currentStrikes + 1;
    }
};

export const addBall = currentBalls => {
    if (currentBalls <= 3) {
        return 0;
    } else {
        return currentBalls + 1;
    }
};