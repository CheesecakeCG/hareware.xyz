// (function () {
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('awoo')) {
    [].forEach.call(document.querySelectorAll('.hoomansOnly'), function (el) {
        el.style.display = 'none';
        console.log("ha furry!");
    });
    document.title = "hare_ware - Homepage"
} else {
    [].forEach.call(document.querySelectorAll('.furriesOnly'), function (el) {
        el.style.display = 'none';
    });

}
// })();
