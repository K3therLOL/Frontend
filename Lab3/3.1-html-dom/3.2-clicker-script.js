const counterDisplay = document.getElementById('counterDisplay');
const cpsDisplay = document.getElementById('cpsDisplay'); // Ссылка на новую метку
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

const localStorageKey = 'clickerCount';
let count = 0;

// Запоминаем время начала сессии (в миллисекундах)
const startTime = Date.now(); 
let clicksInSession = 0; // Считаем клики только в этой сессии для точности КПС

function loadCount() {
    const savedCount = localStorage.getItem(localStorageKey);
    if (savedCount !== null) {
        count = parseInt(savedCount, 10);
    } else {
        count = 0;
    }
    counterDisplay.textContent = count;
}

function saveCount() {
    localStorage.setItem(localStorageKey, count.toString());
}

// Функция для расчета среднего cps
function updateCPS() {
    const currentTime = Date.now();
    const secondsElapsed = (currentTime - startTime) / 1000;

    if (secondsElapsed > 0) {
        const cps = (clicksInSession / secondsElapsed).toFixed(2);
        cpsDisplay.textContent = `Average cps: ${cps}`;
    }
}

clickButton.addEventListener('click', () => {
    count++;
    clicksInSession++;
    
    counterDisplay.textContent = count;
    saveCount();
    updateCPS();
});

resetButton.addEventListener('click', () => {
    if (confirm("Do you really want to clear count?")) {
        count = 0;
        clicksInSession = 0; // Сбрасываем и сессионные клики
        counterDisplay.textContent = count;
        cpsDisplay.textContent = "Average cps: 0";
        saveCount();
    }
});

setInterval(updateCPS, 1000);

loadCount();
