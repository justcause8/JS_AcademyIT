/* Алгоритм действий
1. Получить элементы кнопки и текст текущего цвета
2. Сгенерировать массив для символов использующихся в формате HEX 
3. Написать функцию, которая возвращает случайный цвет, сгенерированный из элементов массива
4. Определить кнопке обработчик события по клику - вызов функции генерации цвета
5. При клике также сгенерированный цвет должен устанавливается backgound-color для body 
и должен выводится текстом текущий цвет
*/



const button = document.getElementById('btn');
const colorText = document.querySelector('.color');
let currentColor = '#FFFFFF';

function genHexString() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; ++i) {
        color += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return color;
}

button.addEventListener('click', () => {
    currentColor = genHexString();
    document.body.style.background = currentColor;
    colorText.textContent = currentColor;
});
