let index = 0;
let imageCount = document.querySelectorAll(".carousel .container img").length;
const bottom = document.querySelector(".carousel .bottom");

for (let i = 0; i < imageCount; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.onclick = () => setIndex(i);
    bottom.append(indicator);
}

let autoTimer = createAuto();

function createAuto() {
    return setInterval(() => {
        index++;
        refresh();
    }, 3000);
}

function refresh() {
    if (index < 0) {
        index = imageCount - 1;
    } else if (index >= imageCount) {
        index = 0;
    }

    let carousel = document.querySelector(".carousel");
    let width = getComputedStyle(carousel).width;
    width = Number(width.slice(0, -2));

    carousel.querySelector(".container").style.left = index * width * -1 + "px";
}

document.addEventListener("DOMContentLoaded", function () {
    const indicators = document.querySelectorAll(".carousel .bottom .indicator");
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            setIndex(i);
            refresh();
        });
    });

    // Pause auto-play when the user hovers over the carousel
    document.querySelector(".carousel").addEventListener('mouseover', () => {
        clearInterval(autoTimer);
    });

    // Resume auto-play when the user moves the mouse out of the carousel
    document.querySelector(".carousel").addEventListener('mouseout', () => {
        autoTimer = createAuto();
    });

    // Start auto-play when the page loads
    autoTimer = createAuto(); // Explicitly call createAuto to start auto-play
});

function leftShift() {
    index--;
    refresh();
}

function rightShift() {
    index++;
    refresh();
}

let setIndex = refreshWrapper((idx) => {
    index = idx;
    refresh();
});

function refreshWrapper(callback) {
    return function () {
        callback.apply(this, arguments);
        clearInterval(autoTimer);
        autoTimer = createAuto();
    };
}
