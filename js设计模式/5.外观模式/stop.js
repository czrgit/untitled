var stopEvent = function (e) {
    e.stopPropagation();
    e.preventDefault();
}

//stopEvent 本身就是生产门面
$('#a').click(function (e) {
    stopEvent(e)
})
