function effetHover() {
    $(".voiture").hover(function () {
            $(this).animate({
                marginLeft: '25px'
            }, 150);
        },
        function () {
            $(this).animate({
                marginLeft: '0'
            }, 150);
        })
}
$(document).ready(function () {
    effetHover();
});