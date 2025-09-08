function changeStyle() {
    const box = document.getElementById("box");

    box.style.backgroundColor = document.getElementById("bgcolor").value;
    box.style.color = document.getElementById("txtcolor").value;
    box.style.fontSize = document.getElementById("txtsize").value + "px";
    box.style.width = document.getElementById("width").value + "px";
    box.style.height = document.getElementById("height").value + "px";
    box.style.opacity = document.getElementById("opacity").value;
    box.style.borderRadius = document.getElementById("radius").value + "px";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", changeStyle);
    input.addEventListener("keyup", changeStyle);
});