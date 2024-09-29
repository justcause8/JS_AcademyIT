/* Алгоритм действий
1. Получить элементы кнопки и картинки
2. Определить url для запроса (https://random.dog/woof.json) 
3. Написать функцию которая по запросу получает картинку и ссылку устанавливает в свойство картинки src 
4. Необходимо также использовать try catch для обработки ошибок
5. Сделать обработчик для события клика на кнопку

*/


let button = document.querySelector('.btn');
let image = document.querySelector('.img')
 
let url = 'https://random.dog/woof.json';

async function getImg () {
    try{
        const responce = await fetch(url);
        if (!responce.ok){
            throw new Error (`Http error! status: ${responce.status}`);
        }
        const data = await responce.json();
        image.src = data.url;
    }
    catch(e){
        console.error('Произошла ошибка:', error);
        alert('Не удалось загрузить картинку. Попробуйте снова позже.');
    }
}

button.addEventListener('click', () => {
    getImg();
})

getImg();