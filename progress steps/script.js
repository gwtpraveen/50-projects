const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prevBtn.addEventListener("click", () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

        let eleWidth = (currentActive - 1) * 33;
        progress.style.width = `${eleWidth}%`;

        if (currentActive === 1) {
            prevBtn.disabled = true;
        } else if (currentActive === circles.length) {
            nextBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }

    })
}