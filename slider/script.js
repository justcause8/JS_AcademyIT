let images = document.querySelectorAll('.slider-img');
let controlls = document.querySelectorAll('.controlls');

let currentIndexImg = 0;

function switchImage(index) {
    images[currentIndexImg].classList.remove('active');
    currentIndexImg = index;
    images[index].classList.add('active');
}

controlls.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('prev')) {
            let index = currentIndexImg - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            switchImage(index);
        }
        else if (element.classList.contains('next')) {
            let index = currentIndexImg + 1;
            if (index >= images.length) {
                index = 0;
            }
            switchImage(index);
        }
    });
});

switchImage(currentIndexImg);