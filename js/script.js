$(document).ready(function () {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    $('.country__item').on('touchstart', function (e) {
        changeActive(e, this, 'country');
    });

    $('.sfier__item').on('touchstart', function (e) {
        changeActive(e, this, 'sfier');
    });
});

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function changeActive(e, current, selector) {
    e.preventDefault();
    e.stopPropagation();
    $(`.${ selector }__item`).each((i, el) => {
        if ($(current).data('val') === $(el).data('val')) {
            $(current).addClass('active');
        } else {
            $(el).removeClass('active');
        }
    });
}