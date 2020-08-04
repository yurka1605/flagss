$(document).ready(function () {
    $('.country__item').on('touchstart', function (e) {
        changeActive(e, this, 'country');
    });

    $('.sfier__item').on('touchstart', function (e) {
        changeActive(e, this, 'sfier');
    });
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