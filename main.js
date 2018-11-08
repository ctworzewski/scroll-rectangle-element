
let size = 100;
let grow = true;

document.body.style.height = '10000px';
const rect = document.createElement('div');
document.body.appendChild(rect);

rect.style.width = '100%';
rect.style.height = size + 'px';
rect.style.backgroundColor = 'green';
rect.style.position = 'fixed';
rect.style.left = 0;
rect.style.top = 0;

const growRect = function () {
    if (size > window.innerHeight / 2) {
        grow = false;
    }
    else if (size <= 0) {
        grow = true;
    }
    if (grow == true) {
        size += 10;
        rect.style.height = size + 'px';
    }
    else {
        size -= 10;
        rect.style.height = size + 'px';
    }
}

window.addEventListener('scroll', growRect);
