$(function () {
    $('.carousel').carouFredSel({
        items                : 2,
        responsive           : true,
        direction            : "left",
        height               : "100%",
        align                : "center",
        scroll : {
            items            : 1,
            duration        : 1000,
            easing          : "quadratic",
            pauseOnHover    : true
        },
        swipe : {
            onTouch : true,
            onMouse: true
        }
    });
});