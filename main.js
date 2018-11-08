
const rectangle = document.createElement('div');
let size = 100;

rectangle.style.backgroundColor = 'green';

rectangle.style.width = size * 10 + 'vw';
rectangle.style.height = size * 0.5 + 'vh';
rectangle.style.position = 'fixed';
rectangle.style.top = 0;
rectangle.style.left = 0;
// rectangle.style.width = '100px';

document.body.appendChild(rectangle);

window.addEventListener('scroll', function () {
    if (window.innerHeight == 0) {
        size += 50;

    }
});


