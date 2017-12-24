jQuery(document).ready(function () {
    $("#info").hide();
    $("#arrow").click(function () {
        $("#info").slideToggle(500);
        $("#arrow img").toggleClass("rotate");
    });
    
    $(".dateSVG svg").click(function () {
        $(".dateSVG svg").toggleClass("rotateSVG");
    });
    $(".rateSVG svg").click(function () {
        $(".rateSVG svg").toggleClass("rotateSVG");
    });
});