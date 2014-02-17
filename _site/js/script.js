/* Author: Gustavo Marques Fernandes

The designer of master codes!

*/


// Para fazer as animações
$("body > section").waypoint(function() {
	$(this).addClass("active");
}, { offset: 600 });


$("body > header").waypoint(function() {
	$(this).removeClass("lean");
}, { offset: -100 });


$("body > header").waypoint(function() {
	$(this).addClass("lean");
}, { offset: -110 });

$("#pageContent .wrapper > section").waypoint(function() {
	$(this).addClass("active");
}, { offset: 600 });

$( ".lang_search .icon" ).click(function() {
	$( ".lang_search div" ).slideToggle( "slow", function() {});
	return(false);
});

$(".noticiasTab nav").idTabs(); 

$( "footer .gf-icon-map" ).click(function() {
	$( this ).delay(1000).toggleClass("showMap");
	$( "footer .contatos" ).slideToggle( "slow" );
    var $self = $(this);
    if ($self.text() == "Ver no mapa")
       $self.text("Fechar mapa");
    else
        $self.text("Ver no mapa");
	return(false);
});

$('#nav').find('ul').hide();

$('#nav li:has(ul)').addClass('com-submenu').hover(
	function(){$(this).find('> ul').slideDown('fast');},
	function(){$(this).find('> ul').slideUp('Slow');}
);	





$('.custom-upload input[type=file]').change(function(){
    $(this).next().find('input').val($(this).val());
});


$('.multiple-select').multipleSelect({
	placeholder: "Select com múltiplas opções",
	width: 320,
	multiple: true,
	multipleWidth: 130
});

$( "#navMobile > a" ).click(function() {
	$( "#navMobile > nav" ).slideToggle( "slow", function() {});
});

