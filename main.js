function simulateArrowDown() {
    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.which = 40;
    document.dispatchEvent(event);
}

function simulateArrowUp() {
    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.which = 38;
    document.dispatchEvent(event);
}

function simulateArrowLeft() {
    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.which = 37;
    document.dispatchEvent(event);
}

function simulateArrowRight() {
    var event = document.createEvent('Event');
    event.initEvent('keydown', true, true);
    event.which = 39;
    document.dispatchEvent(event);
}

$(document).ready(function () {
    $(window).on('wheel', function (event) {
        if (event.originalEvent.deltaY > 0) {
            simulateArrowDown();
        } else if (event.originalEvent.deltaY < 0) {
            simulateArrowUp();
        } else if (event.originalEvent.deltaX > 0) {
            simulateArrowRight();
        } else if (event.originalEvent.deltaX < 0) {
            simulateArrowLeft();
        }
    });
});
