// ----Variables----------
let nav= document.getElementById('nav');
let menu= document.getElementById('enlaces');
let abrir=document.getElementById('open');
let botones=document.getElementsByClassName('btn-header');
let cerrado=true;

/*Funcion que muestra la transicion de los nav1 y nav2 de css*/
function menus(){
    let desplazamiento_Actual=window.pageYOffset;
    if(desplazamiento_Actual<=350){
        nav.classList.remove('nav2');
        nav.className= ('nav1');
        nav.style.transition='1s';

        menu.style.top='75px';//le da altura al menu para que se adapte al alto del nav*/
        abrir.style.color='#fff';//color blanco si esta arriba
        // alert();
    }else{
        nav.classList.remove('nav1');
        nav.className= ('nav2');
        nav.style.transition='1s';

        menu.style.top='95px';
        abrir.style.color='#000';
        // alert();
    }
}

/*
    Función que muestra u oculta el menu responsive
*/ 
function apertura(){
    if(cerrado){
        menu.style.width='70vw';
        cerrado=false;
    }else{
        menu.style.width='';
        menu.style.overflow='hidden';
        cerrado=true;
    }

}
//Evento para cuando se hace scroll
window.addEventListener('scroll',function(){
    this.console.log(window.pageYOffset);
    this.console.log(nav.className);
    menus();
});

/*
    Evento para cuandpo carga la página web.
 */
window.addEventListener('load',function(){
    $('#onload').fadeOut(); //Desaparece onload
    $('body').removeClass('hidden');
    menus();
});

/*Funcion para cuando se redimenciona la pantalla (Responsive)*/ 
window.addEventListener('resize',function(){
    if(this.screen.width>=700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
        
    }

});

/*
Evento que hace el llamado para abrir el menú responsive
*/
abrir.addEventListener('click',function(){
    apertura();
})
/*
    Evento por si dan click en cualquier parte se cierre el menú movil
*/
window.addEventListener('click',function(e){
    this.console.log(e.target);
    if(cerrado==false){
        let span=this.document.querySelector('span');//icono spam
        if(e.target!==span&&e.target!==abrir){//si lo que tocó no es el simbolo
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
});

