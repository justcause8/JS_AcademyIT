let step = 'X';
let gameWho = document.getElementById('gameWho');
let spanWin = document.getElementById('spanWin');
let winnerDiv = document.getElementById('Winner');
let gameItems = document.querySelectorAll('.gameItem');
let btnNewGame = document.getElementById('btnNewGame');

let winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const whoPlays = () => {
    gameWho.textContent = step === 'X' ? 'Игрок 1 (Крестик)' : 'Игрок 2 (Нолик)';
};

// Проверка на победителя
const checkWin = () => {
    winCombinations.forEach(combination => {
        let [a, b, c] = combination;
        if (gameItems[a].innerText === step && gameItems[b].innerText === step && gameItems[c].innerText === step) {
            endGame(step);
        }
    });
};

// Функция проверки на ничью
const checkDraw = () => {
    const allCellsFilled = [...gameItems].every((item) => {
        return item.innerText !== ''; 
    });

    if (allCellsFilled) {
        endGame('Ничья');
    }
};


// Функция завершения игры
const endGame = (result) => {
    // Определяем текст для отображения результата
    let resultText;
    if (result === 'Ничья') {
        resultText = 'Ничья';
    } else {
        resultText = `Победитель: Игрок ${step === 'X' ? 1 : 2} (${step})`;
    }
    spanWin.innerText = resultText;
    winnerDiv.style.display = 'block';
    gameItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
    });
};


// Обработчик клика по ячейке
const handleClick = (e) => {
    if (e.target.innerText === '') {
        e.target.innerText = step;
        checkWin();
        checkDraw();
        step = step === 'X' ? 'O' : 'X';
        whoPlays();
    }
};

// Перезапуск игры
btnNewGame.addEventListener('click', () => {
    gameItems.forEach(item => item.innerText = '');
    step = 'X';
    winnerDiv.style.display = 'none';
    whoPlays();
    gameItems.forEach(item => item.addEventListener('click', handleClick));
});

// Инициализация игры
whoPlays();
gameItems.forEach(item => item.addEventListener('click', handleClick));