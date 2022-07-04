let colors=['red', 'green','blue','yellow','orange'];

for(let i =0 ; i<colors.length ; i++){
    $(".color-options li").eq(i).css("backgroundColor",colors[i]);
}


$('.color-options li').click(function(){
    let currentColor=$(this).css("backgroundColor");
    $('.change').css("color",currentColor);
})

$(".color-box").click(function(){
   let currentWidth= $(".color-options").outerWidth();
   if($(".color-box").css("left")=="0px"){
    $('.color-box').animate({"left":-currentWidth},5000);
   } else{
    $('.color-box').animate({"left":0},5000);
   }
})

let aboutSection = $("#about").offset().top;
$(window).scroll(function(){
    let tScroll = $(window).scrollTop();
    if(tScroll >= aboutSection-50){
        $(".navbar").css({"backgroundColor":"rgba(0,0,0,0.6)","transition":"0.5s"})
        $("#btnUp").fadeIn(2000);
    }
    else{
        $(".navbar").css({"backgroundColor":"transparent","transition":"0.5s"})
        $("#btnUp").fadeOut(2000);

    }
})


$("#btnUp").click(function(){
    $(window).scrollTop(0);
    // window.scrollTo(0,0); or use this
})


/*scroll-view:smooth this is not 
supported by all browser, 
so I can do it by myself like this
*/
// $("#services").click(function(){
//     let servicesSection  = $("#services").offset().top;
//     $("html,body").animate({scrollTop:servicesSection},20000);
// })

// instead of repeating the above code 
$("a").click(function(e){
   let attr=$(e.target).attr('href');
   let sectionOffset  = $(attr).offset().top;
   $("html,body").animate({scrollTop:sectionOffset},2000);
})

$(document).ready(function(){
    $(".loading .sk-circle").fadeOut(2000);
    $(".loading").fadeOut(2000);
    $("body").css("overflow","auto")

})

