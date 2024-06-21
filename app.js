// 1. Определяем массив объектов и существующие элементы
const entities = [
{   city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    img: '../img/img1.png',
    link: "link1"
},{
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    img: '../img/img2.png',
    link: "link2"
},{
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    img: '../img/img3.png',
    link: "link3"
}
    
]
let index = 0;
const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');
const cost = document.querySelector('.cost');
const img = document.querySelector('.slider-img');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const point1 = document.querySelector('.point1');
const point2 = document.querySelector('.point2');
const point3 = document.querySelector('.point3');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const points = [point1, point2, point3];
const links = [link1, link2, link3];

// 2. Определяем функцию рендера
const render = () => {
    city.textContent = entities[index].city;
    area.textContent = entities[index].area;
    time.textContent = entities[index].time;
    cost.textContent = entities[index].cost;
    img.src = entities[index].img;
    link1.classList.remove('link-active');
    link2.classList.remove('link-active');
    link3.classList.remove('link-active');

    if (index === 0) {
        link1.classList.add('link-active');
    } else if (index === 1) { 
        link2.classList.add('link-active');
    } else if (index === 2) {
        link3.classList.add('link-active');
    }
    points.forEach(point => point.classList.remove('point-active'));
    points[index].classList.add('point-active');
}

render();

// 3. Функция клика на ссылки
const linkClick = (event) => {
    links.forEach(link => link.classList.remove('link-active'));
    event.target.classList.add('link-active');
    index = links.indexOf(event.target);
    render();
}

// 4. Функция клика на точки
const pointClick = (event) => {
    points.forEach(point => point.classList.remove('point-active'));
    event.target.classList.add('point-active');
    index = points.indexOf(event.target);
    render();
}

// 5. Функция клика на стрелки
const arrowClick = (event) => {
    if (event.target.classList.contains('arrow-right')) {
        index++;
    } else if (event.target.classList.contains('arrow-left')) {
        index--;
    }
    if (index > entities.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = entities.length - 1;    
    }
    render();
}

// 6. Обработчики
link1.onclick = linkClick;
link2.onclick = linkClick;
link3.onclick = linkClick;

//В задании не было обработчиков при наведении, но показалось, что так будет лучше

link1.onmouseover = linkClick;
link1.onmouseout = linkClick;
link2.onmouseover = linkClick;
link2.onmouseout = linkClick;
link3.onmouseover = linkClick;
link3.onmouseout = linkClick;


point1.onclick = pointClick;
point2.onclick = pointClick;
point3.onclick = pointClick;

left.onclick = arrowClick;
right.onclick = arrowClick;