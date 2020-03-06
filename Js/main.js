// ------------Variables----------
let nav= document.getElementById('nav');
let menu= document.getElementById('enlaces');
let abrir=document.getElementById('open');
let botones=document.getElementsByClassName('btn-header');
let cerrado=true;

let flecha=document.getElementById('botones');
let flecha2=document.getElementById('botones2');
var galeria= ['carrusel/costura.jpeg','carrusel/eventos.jpeg','carrusel/restaurante.jpeg'];
var nombres=['Salon de Costura','Salon de Eventos','Restaurante Sabores de Antaño'];
var textos=[''];
let cont=0;//contador usado para recorrer los arreglos de texto e imagen del Slider.
let conte=document.getElementById('content');//Contenedor del Slider



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

/**
 * Función que quita las flechas del slider desde que llegan a la altura del nav2
 * Flecha y flecha2 son las del Slider.
 */
function slider(){
    let desplazamiento_Actual=window.pageYOffset;
    if(desplazamiento_Actual<=808){
        $(flecha).show();
        $(flecha2).show();
    }else{
        $(flecha).hide();
        $(flecha2).hide();
        // main.classList.hide('atras-botones');
        // flecha.style.hide();
    }
}
conte.addEventListener('load',function(){
    carrousel();
});
function carrousel (e){
    let img=conte.querySelector('img');
    let h33=conte.querySelector('h3');//titulo de la imagen que cambia del Slider 
    //let pp=conte.querySelector('p');//Descripción de la imagen que cambia en el Slider

    
    // alert(img.namespaceURI);
    if(e.target == flecha){
        img.src=galeria[cont];
        h33.textContent=nombres[cont];
      //  pp.textContent='buuuuuuu';
        cont--;
        if(cont<0){
            cont=galeria.length-1;
        }
        
        // conte.style.img.src=imagenes[1];
    }
    if(e.target==flecha2&&e.target==botones2){
        
        // alert(cont);
        // conte.img=imagenes[1];
        img.src=galeria[cont];
        h33.textContent=nombres[cont];
        cont++;
        if(cont>=galeria.length)
        {
            cont=0;
        }
    }

        // let atras=content.querySelector('.atras-botones'),
        //     adelante=content.querySelector('.adelante-botones'),
        //     img=content.querySelector('img'),
        //     tgt=e.target;//identifica el elemento seleccionado si atras o adelante

        //     if(tgt=atras){
        //         if(cont>0){
        //             img.src=imagenes[cont-1];
        //             cont--;
        //             content.img.src=imagenes[1];
        //         }else{
        //             img.src=imagenes[imagenes.length-1];
        //             cont= imagenes.length - 1;
        //         }

        //     }else if(tgt==adelante){
        //         if(cont<imagenes.length-1){
        //             img.src=imagenes[cont+1];
        //             cont++;
        //         }else{
        //             img.src=imagenes[0];
        //             cont= 0;
        //         }
        //     }
  
}

//Evento para cuando se hace scroll
window.addEventListener('scroll',function(){
    this.console.log(window.pageYOffset);
    this.console.log(nav.className);
    menus();
    slider();//desaparece las flechas
});

/*
    Evento para cuandpo carga la página web.
 */
window.addEventListener('load',function(){
    $('#onload').fadeOut(); //Desaparece onload
    $('body').removeClass('hidden');
    menus();
    // let contenedor= document.querySelectorAll('.content');
    // carrousel(contenedor);
    // $('.slider li').hide();//Oculta las img del Carrusel Slide
    // $('.slider li:first').show();//Muestra la primera img del Carrusel
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
});
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
    carrousel(e);
});

window.addEventListener('DomContendLoaded',function(e){
    carrousel();
});
// document.addEventListener('DomContendLoaded',()=>{
//     let contenedor= document.querySelectorAll('.content');
//     carrousel(contenedor);
// });
