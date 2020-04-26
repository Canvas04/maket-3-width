let paginationContainer = document.querySelector('.swiper-pagination');
paginationContainer.style.marginBottom = '40px'; 

let hiddenEl = document.querySelectorAll('.logo-of-companies__el_click');
for (const el of hiddenEl ) {
el.style.display = 'none'    
}
let linkHidden = document.querySelector('.logo-of-companies__link-block_up');
linkHidden.style.display = 'none';

let linkShow = document.querySelector('.logo-of-companies__link_down');
linkShow.addEventListener('click' , (ev) => {
    ev.preventDefault();
    for (const el of hiddenEl ) {
        el.style.display = 'flex' ;
        el.style.justifyContent = 'space-evenly';   
        }
        linkShow.style.display = 'none';
       linkHidden.style.display = 'block';   
});

linkHidden.addEventListener('click' , (ev) => {
    ev.preventDefault();
    linkHidden.style.display = 'none';
    linkShow.style.display = 'block';
    for (const el of hiddenEl ) {
        el.style.display = 'none' ;   
        }
})
