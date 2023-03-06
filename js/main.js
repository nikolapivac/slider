$(document).ready(function() {
    $(".next").click(function(){
        $(".prev, .next").prop("disabled", true);

        let lastTop = $("div.first > img:last-child");
        let lastBottom = $("div.second > img:last-child");

        $(".first img").animate({left: `${lastTop.width()+10}`}, 1000, "linear", function() {
            $(".first img").css({left: 0});
            lastTop.remove().prependTo(".first");
            $(".next,.prev").prop("disabled", false);
        });
        $(".second img").animate({left: `${lastBottom.width()+10}`}, 1000, "linear", function() {
            $(".second img").css({left: 0});
            lastBottom.remove().prependTo(".second");
            $(".next, .prev").prop("disabled", false);
        }); 
    })

    $(".prev").click(function(){
        $(".prev, .next").prop("disabled", true);
        
        let firstTop = $("div.first > img:first-child");
        let firstBottom = $("div.second > img:first-child");


        $(".first img").animate({left: `${-(firstTop.width()+10)}`}, 1000, "linear", function() {
            $(".first img").css({left: 0});
            firstTop.remove().appendTo(".first");
            $(".next, .prev").prop("disabled", false);
        });

        $(".second img").animate({left: `${-(firstBottom.width()+10)}`}, 1000, "linear", function() {
            $(".second img").css({left: 0});
            firstBottom.remove().appendTo(".second");
            $(".next, .prev").prop("disabled", false);
        }); 
    })
})