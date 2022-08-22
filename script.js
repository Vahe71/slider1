const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider .btn.prev');
const next = document.querySelector('.slider .btn.next');
const radio = document.querySelectorAll('.slider .radio input');
const image = ['img/1.png', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];

let current = 0;

radio[0].onchange = function() {
    current = 0;
    slider.style.backgroundImage = `url(${image[current]})`;
}
radio[1].onchange = function() {
    current = 1;
    slider.style.backgroundImage = `url(${image[current]})`;
}
radio[2].onchange = function() {
    current = 2;
    slider.style.backgroundImage = `url(${image[current]})`;
}
radio[3].onchange = function() {
    current = 3;
    slider.style.backgroundImage = `url(${image[current]})`;
}

next.onclick = () => {
    current++;
    current == image.length ? current = 0 : '';
    slider.style.backgroundImage = `url(${image[current]})`;
    radio[current].checked = true; 
};
prev.onclick = () => {
    current--;
    current < 0 ? current = image.length-1: '';
    slider.style.backgroundImage = `url(${image[current]})`;
    radio[current].checked = true; 
}










