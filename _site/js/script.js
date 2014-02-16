/* Author: Gustavo Marques Fernandes

The designer of master codes!

*/


// Para fazer as animações
$("body > section").waypoint(function() {
	$(this).addClass("active");
}, { offset: 600 });


$("body > header").waypoint(function() {
	$(this).removeClass("lean");
}, { offset: -50 });


$("body > header").waypoint(function() {
	$(this).addClass("lean");
}, { offset: -250 });

$( ".lang_search .icon" ).click(function() {
	$( ".lang_search div" ).slideToggle( "slow", function() {});
	return(false);
});

$(".noticiasTab nav").idTabs(); 

$( "footer .gf-icon-map" ).click(function() {
	$( "footer .contatos" ).toggleClass("showMap");
    var $self = $(this);
    if ($self.text() == "Ver no mapa")
       $self.text("Fechar mapa");
    else
        $self.text("Ver no mapa");
	return(false);
});





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

