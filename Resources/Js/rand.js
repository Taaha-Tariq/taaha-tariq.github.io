const targetElement = document.querySelector('.bulb');
const heading = document.querySelector('.title');
const button = document.querySelector('.button');
const span = document.querySelector('span');
const body = document.body;
const list = document.querySelectorAll('a');
const img = document.querySelectorAll('img');
const html = document.querySelector('html');

function randNumGen () {
    return Math.floor(Math.random() * 256);
}

function changeColor () {
    const num1 = randNumGen();
    const num2 = randNumGen();
    const num3 = randNumGen();
    if(num1 !== 0 || num2 !== 0 || num3 !== 0) {
        heading.style.color = `rgb(${num1}, ${num2}, ${num3})`;
        span.style.color = `rgb(${num1}, ${num2}, ${num3})`;
        button.style.backgroundColor = `rgba(${num1}, ${num2}, ${num3}, 0.85)`;
        body.style.backgroundImage = `linear-gradient(black 50%, rgb(${num1}, ${num2}, ${num3}))`;
        html.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
        for (let i = 0; i < list.length - 1; i++) {
            list[i].addEventListener('mouseover', function () {
                list[i].style.color = `rgb(${num1}, ${num2}, ${num3})`;
            })
            list[i].addEventListener('mouseout', function () {
                list[i].style.color = 'white';
        })
        }
        for (let i = 1; i < img.length; i++) {
            img[i].style.border = `1px solid rgb(${num1}, ${num2}, ${num3}`
        }
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
        })
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = `rgba(${num1}, ${num2}, ${num3}, 0.85)`;
        })
    }
}

targetElement.addEventListener('click', changeColor);

button.addEventListener('click', function () {
    heading.style.color = 'white';
    body.style.backgroundImage = 'linear-gradient(rgb(0, 0, 0) 50%, rgba(57, 222, 230, 0.999))';
    span.style.color = 'rgba(57, 222, 230, 0.999)';
    button.style.backgroundColor = 'rgba(37, 184, 192, 0.999)';
    html.style.backgroundColor = 'rgba(57, 222, 230, 0.999)';
    for (let i = 0; i < list.length - 1; i++) {
        list[i].addEventListener('mouseover', function () {
            list[i].style.color = 'rgba(57, 222, 230, 0.999)'
        })
    }
    for (let i = 1; i < img.length; i++) {
        img[i].style.border = '1px solid rgba(57, 222, 230, 0.999)'
    }
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = 'rgba(57, 222, 230, 0.999)';
    })
    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = 'rgba(37, 184, 192, 0.999)';
    })
});