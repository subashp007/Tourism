$(".i1").click(function(){
    $(".head srch-br").removeClass(".none");
     $(".srch-br").animate(
        {width :"toggle"
    });

});

$(".forbtn button").click(function(event){
      $(".vidi").attr("src",this.className+".mp4");

});
$(".forbtn button").click(function(event){
    $(".forbtn .activ").removeClass("activ");
    $(".forbtn ."+this.className).addClass("activ");


});



$(".i2").click(function(){
   
    
    $(".login").toggleClass("zindex");
    $(".login").toggleClass("none");
});
$(".login button").click(function(){
    $(".login").toggleClass("none");
    
    $(".login").removeClass("zindex");
})
$(".ilbtn").click(function(){
    alert("Login to continue");
    
})








