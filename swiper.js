let paginationContainer = document.querySelector('.swiper-pagination');
paginationContainer.style.marginBottom = '40px'; 

let hiddenEl = document.querySelectorAll('.logo-of-companies__el_click');
for (const el of hiddenEl ) {
el.style.display = 'none'    
}
let linkHidden = document.querySelector('.logo-of-companies__link-block_up');
linkHidden.style.display = 'none';