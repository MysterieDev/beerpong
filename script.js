const ball = document.querySelector("#ball");
const ballDiv = document.querySelector("#ellipse-div");
const root = document.documentElement;
ball.classList.add("shootY");
ball.onclick = changeDirection;

function changeDirection() {
    const ballYPosition = offset(ball);
    const ballDivPosition = offset(ballDiv);
    ball.style.top = parseInt(ballYPosition.top) - parseInt(ballDivPosition.top);
    ball.classList.remove("shootY");
    ball.onclick = shoot;
    ball.classList.add("shootX");
}

function shoot() {
    const yPosition = parseInt(ball.style.top);
    const newYPosition = yPosition - 320;
    ball.style.top = newYPosition;
    root.style.setProperty("--top", yPosition + "px");
    root.style.setProperty("--topShot", newYPosition + "px");
    ball.classList.remove("shootX");
    ball.classList.add("Shoot");
}

function offset(el) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}