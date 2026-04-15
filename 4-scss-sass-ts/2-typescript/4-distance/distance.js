"use strict";
function isPoint(obj) {
    return (obj !== null &&
        typeof obj === "object" &&
        typeof obj.x === "number" &&
        typeof obj.y === "number");
}
function distance(a, b, c, d) {
    if (isPoint(a) && isPoint(b)) {
        return Math.hypot(b.x - a.x, b.y - a.y);
    }
    else if (typeof a === "number" && typeof b === "number" && typeof c !== "undefined" && typeof d !== "undefined") {
        return Math.hypot(c - a, d - b);
    }
    throw Error("Invalid arguments.");
}
console.log(distance(6, 7, 3, 3));
console.log(distance({ x: 6, y: 7 }, { x: 3, y: 3 }));
