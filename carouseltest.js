// carousel.js

let index = 0;

function setIndex(idx) {
    index = idx;
    refresh();
}

function leftShift() {
    index--;
    refresh();
}

function rightShift() {
    index++;
    refresh();
}

function createAuto() {
    return setInterval(() => {
        index++;
        refresh();
    }, 3000);
}

function refresh() {
    // ... your existing refresh logic
}

// Exporting functions and index for testing purposes
module.exports = {
    setIndex,
    leftShift,
    rightShift,
    createAuto,
    refresh,
    getIndex: function () {
        return index;
    },
};
