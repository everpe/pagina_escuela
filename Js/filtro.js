$(function(){
    //La clase filter que cuando le den click
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        let valor =$(this).attr('data-nombre');
        if(valor=='todos')//Si selecciona todos
        {
            $('.cont-work').show('1000');//muestra todos los div con cont-work
        }
        else{
            $('.cont-work').not('.'+valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');//Muestra según el valor seleccionado
        }
    });

    //Para cuando se de click en el nav
    let quien_somos = $('#quien_somos').offset().top,
    servicios= $('#servicios').offset().top,
    formacion= $('#formacion').offset().top,
    contacto= $('#contacto').offset().top;

    window.addEventListener('resize',function(){
        let quien_somos = $('#quien_somos').offset().top,
        servicios= $('#servicios').offset().top,
        formacion= $('#formacion').offset().top,
        contacto= $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    $('#enlace-quien_somos').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: quien_somos-95
        },600);
    });
    $('#enlace-servicios').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: servicios-95
        },600);
    });
    $('#enlace-formacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: formacion-50
        },600);
    });
    $('#enlace-contacto').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: contacto
        },600);
    });


});