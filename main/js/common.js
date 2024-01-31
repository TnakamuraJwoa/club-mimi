$(function(){
    $.ajaxSetup({cache:false});
    $("header").load("./common/header.html");
    $("nav").load("./common/navi.html");
    $("footer").load("./common/footer.html");
});