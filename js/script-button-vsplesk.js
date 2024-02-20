var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 2000);
};

var bubblyButtons = document.getElementsByClassName("portfolio-bottom");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}