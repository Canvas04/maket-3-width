let paginationContainer = document.querySelector('.swiper-pagination');
paginationContainer.style.marginBottom = '40px';

let hiddenEl = document.querySelectorAll('.logo-of-companies__el_click');
for (const el of hiddenEl) {
    el.style.display = 'none'
}
let linkHidden = document.querySelector('.logo-of-companies__link-block_up');
linkHidden.style.display = 'none';

let linkShow = document.querySelector('.logo-of-companies__link_down');
linkShow.addEventListener('click', (ev) => {
    ev.preventDefault();
    for (const el of hiddenEl) {
        el.style.display = 'flex';
        el.style.justifyContent = 'space-between';
        el.style.marginTop = '-5px'
    }
    linkShow.style.display = 'none';
    linkHidden.style.display = 'block';
});


linkHidden.addEventListener('click', (ev) => {
    ev.preventDefault();
    linkHidden.style.display = 'none';
    linkShow.style.display = 'block';
    for (const el of hiddenEl) {
        el.style.display = 'none';
    }
})
// Меняю местами Dom-элементы при 1120px и отключаю фото Sony

let imgBosch = document.querySelector('.logo-of-companies__img_bosch');
let imgHp = document.querySelector('.logo-of-companies__img_hp');
let imgAcer = document.querySelector('.logo-of-companies__img_acer');
let imgView = document.querySelector('.logo-of-companies__img_viewSonic');
let imgSonyDisabled = document.querySelector('.logo-of-companies__el_click-disabled')

if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1120px)');
    mq.addListener(screenTest);
    screenTest(mq);
}
function screenTest(mq) {
    if (mq.matches) {
        imgBosch.src = '../img__slider/viewSonic.svg';
        imgHp.src = '../img__slider/bosch.svg';
        imgAcer.src = '../img__slider/hp.svg';
        imgView.src = '../img__slider/acer.svg';
        imgSonyDisabled.style.display = 'none'
    } 
}