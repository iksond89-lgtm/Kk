document.addEventListener("DOMContentLoaded", () => {

    console.log("app.js loaded OK");

    const container = document.getElementById("unit-buttons");

    console.log("container =", container);

    if (!container) {
        alert("找不到 unit-buttons");
        return;
    }

    container.innerHTML = "TEST OK";

    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.textContent = "Unit " + i;
        btn.style.margin = "5px";

        btn.onclick = () => alert("Unit " + i);

        container.appendChild(btn);
    }
});
