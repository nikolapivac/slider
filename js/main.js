function handleNextClick() {
    $("div.first > img:last-child").remove().prependTo(".first");
    $("div.second > img:last-child").remove().prependTo(".second");
}

function handlePrevClick() {
    $("div.first > img:first-child").remove().appendTo(".first");
    $("div.second > img:first-child").remove().appendTo(".second");
}

$(document).ready(function() {
    $(".prev").click(function(){
        handlePrevClick();
    })

    $(".next").click(function(){
        handleNextClick();
    })
})