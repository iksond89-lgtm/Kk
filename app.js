document.addEventListener("DOMContentLoaded", () => {
    console.log("app.js loaded");

    const container = document.getElementById("unit-buttons");

    if (!container) {
        console.error("找不到 unit-buttons");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.textContent = "Unit " + i;

        btn.onclick = () => selectUnit(i);

        container.appendChild(btn);
    }
});
