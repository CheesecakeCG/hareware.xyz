// (function () {
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('furry')) {
    [].forEach.call(document.querySelectorAll('.hoomansOnly'), function (el) {
        el.style.display = 'none';
        console.log("ha furry!");
    });
} else {
    [].forEach.call(document.querySelectorAll('.furriesOnly'), function (el) {
        el.style.display = 'none';
    });

}
// })();
