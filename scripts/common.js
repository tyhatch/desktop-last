$(document).ready(function() {
/* place jQuery actions here */
$(".accordionList li ul").hide();
$(".accordionList > li > a").click(function() {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
}).next().hide();

$(".accordionList > li li > a").click(function() {
	$(".accordionList > li li").removeClass("active");	
    $(this).parent().toggleClass("active");
});

/* end jQuery actions here */
});
