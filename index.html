let wrongList = [];
let currentUnit = null;
let currentIndex = 0;
let mode = ""; // eng2ch or ch2eng

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

// 產生 unit 選單
function showUnits() {
    menu.innerHTML = "<h2>選擇 Unit</h2>";

    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.innerText = "Unit " + i;
        btn.onclick = () => chooseUnit(i);
        menu.appendChild(btn);
    }
}

function chooseUnit(unit) {
    currentUnit = WORD_DATA.b1[unit];
    menu.innerHTML = `
        <h2>Unit ${unit}</h2>
        <button onclick="startQuiz('eng2ch')">英翻中</button>
        <button onclick="startQuiz('ch2eng')">中翻英</button>
    `;
}

// 開始測驗
function startQuiz(m) {
    mode = m;
    currentIndex = 0;
    wrongList = [];
    showQuestion();
}

// 顯示題目
function showQuestion() {
    const word = currentUnit[currentIndex];

    if (!word) {
        finishQuiz();
        return;
    }

    let question = mode === "eng2ch" ? word.eng : word.ch;
    let answerType = mode === "eng2ch" ? "中文" : "英文";

    quiz.innerHTML = `
        <h3>${question}</h3>
        <input id="answer" placeholder="輸入${answerType}">
        <button onclick="checkAnswer()">提交</button>
    `;
}

// 檢查答案
function checkAnswer() {
    const word = currentUnit[currentIndex];
    const userAns = document.getElementById("answer").value.trim();

    let correct = mode === "eng2ch" ? word.ch : word.eng;

    if (userAns !== correct) {
        wrongList.push({
            question: mode === "eng2ch" ? word.eng : word.ch,
            correct: correct,
            user: userAns
        });
    }

    currentIndex++;
    showQuestion();
}

// 完成測驗
function finishQuiz() {
    quiz.innerHTML = "<h2>測驗完成</h2>";

    if (wrongList.length === 0) {
        result.innerHTML = "<p>全對！</p>";
        return;
    }

    let html = "<h3>錯題本</h3><ul>";
    wrongList.forEach(w => {
        html += `<li>
            題目：${w.question} <br>
            你的答案：${w.user} <br>
            正確：${w.correct}
        </li><br>`;
    });
    html += "</ul>";

    result.innerHTML = html;
}

// 初始化
showUnits();
