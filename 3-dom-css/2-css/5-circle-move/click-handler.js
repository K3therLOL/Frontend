const circle = document.getElementById("circle");
circle.style.position = "absolute";

document.addEventListener("click", (event) => {
    circle.style.left = event.pageX + "px";
    circle.style.top = event.pageY + "px";
});
