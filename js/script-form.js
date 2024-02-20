//tabs
window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.visibility = "visible";
        overlay.classList.add('fade1');
        more.style.display = "none"
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //блокирует скролл при открытом окне
    });

    close.addEventListener('click', function () {
        overlay.style.visibility = 'hidden';
        more.classList.remove('more-splash');
        overlay.classList.remove('fade1');
        more.style.display = "block"
        document.body.style.overflow = '';
    });
});