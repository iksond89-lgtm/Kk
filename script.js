import { WORD_DATA } from './data.js';

let currentQuestions = [], mode = "", currentIndex = 0, wrongWords = [];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('unitSelect');
    Object.keys(WORD_DATA).forEach(u => {
        let opt = document.createElement('option');
        opt.value = u; opt.text = `Unit ${u} (${WORD_DATA[u].length} 詞)`;
        select.appendChild(opt);
    });
});

window.startQuiz = (m) => {
    mode = m;
    currentQuestions = [...WORD_DATA[document.getElementById('unitSelect').value]].sort(() => Math.random() - 0.5);
    currentIndex = 0; wrongWords = [];
    document.getElementById('setup').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    showQuestion();
};

function showQuestion() {
    if (currentIndex < currentQuestions.length) {
        document.getElementById('questionHeader').innerText = `第 ${currentIndex + 1} / ${currentQuestions.length} 題`;
        document.getElementById('wordDisplay').innerText = mode === 'ENG_CHI' ? currentQuestions[currentIndex].eng : currentQuestions[currentIndex].ch;
    } else {
        showResults();
    }
}

window.checkAnswer = () => {
    const input = document.getElementById('answer');
    const correct = mode === 'ENG_CHI' ? currentQuestions[currentIndex].ch : currentQuestions[currentIndex].eng;
    if (input.value.trim() !== correct) {
        wrongWords.push({ q: document.getElementById('wordDisplay').innerText, ans: correct });
    }
    input.value = ""; currentIndex++; showQuestion();
};

function showResults() {
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('wrongWords').innerHTML = wrongWords.length === 0 ? "全對！太厲害了！" : 
        wrongWords.map(w => `<div class="wrong"><b>${w.q}</b> -> ${w.ans}</div>`).join('');
}
