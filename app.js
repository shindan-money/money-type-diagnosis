const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const retryBtn = document.getElementById('retry-btn');

const questionText = document.getElementById('question-text');
const choices = document.getElementById('choices');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

let current = 0;
let answers = [];

let userName = '';
let userBranch = '';

const options = [
  { label: 'とても当てはまる', score: 5 },
  { label: '当てはまる', score: 4 },
  { label: 'どちらともいえない', score: 3 },
  { label: 'あまり当てはまらない', score: 2 },
  { label: 'まったく当てはまらない', score: 1 }
];

function show(el) {
  [startScreen, quizScreen, resultScreen].forEach(screen => {
    screen.classList.add('hidden');
  });

  el.classList.remove('hidden');
}

function render() {
  const q = QUESTIONS[current];

  questionText.textContent = q.text;
  progressText.textContent = `${current + 1} / ${QUESTIONS.length}`;
  progressBar.style.width =
    `${((current + 1) / QUESTIONS.length) * 100}%`;

  choices.innerHTML = '';

  options.forEach(option => {
    const button = document.createElement('button');

    button.className = 'choice';
    button.textContent = option.label;

    button.onclick = () => {
      answers[current] = option.score;

      if (current < QUESTIONS.length - 1) {
        current++;
        render();
      } else {
        finish();
      }
    };

    choices.appendChild(button);
  });

  backBtn.style.visibility =
    current === 0 ? 'hidden' : 'visible';
}

function finish() {
  const scores = {
    investor: 0,
    saver: 0,
    planner: 0,
    enjoyer: 0,
    challenger: 0,
    balance: 0
  };

  QUESTIONS.forEach((q, i) => {
    scores[q.type] += answers[i] || 3;
  });

  const ranked = Object.entries(scores).sort(
    (a, b) => b[1] - a[1]
  );

  let winner = ranked[0][0];

  if (
    ranked[0][1] - ranked[1][1] <= 1 &&
    scores.balance >= ranked[0][1] - 2
  ) {
    winner = 'balance';
  }

  const t = TYPES[winner];

  document.getElementById('result-icon').textContent = t.icon;

  document.getElementById('result-title').textContent =
    `${userBranch} ${userName}さんは「${t.name}」`;

  document.getElementById('result-summary').textContent =
    t.summary;

  document.getElementById('result-advice').textContent =
    t.advice;

  const list = document.getElementById('score-list');
  list.innerHTML = '';

  Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, val]) => {
      const row = document.createElement('div');

      row.className = 'score-row';

      row.innerHTML = `
        <span>
          ${TYPES[key].icon}
          ${TYPES[key].name.replace('タイプ', '')}
        </span>

        <div class="bar">
          <div style="width:${(val / 15) * 100}%"></div>
        </div>

        <strong>${val}</strong>
      `;

      list.appendChild(row);
    });

  show(resultScreen);
}

startBtn.onclick = () => {
  userName =
    document.getElementById('username').value.trim();

  userBranch =
    document.getElementById('branch').value.trim();

  if (userBranch === '') {
    alert('支社名を入力してください');
    return;
  }

  if (userName === '') {
    alert('お名前を入力してください');
    return;
  }

  current = 0;
  answers = [];

  show(quizScreen);
  render();
};

backBtn.onclick = () => {
  if (current > 0) {
    current--;
    render();
  }
};

retryBtn.onclick = () => {
  current = 0;
  answers = [];

  show(startScreen);
};
