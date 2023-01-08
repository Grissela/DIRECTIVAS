import { ThisReceiver } from '@angular/compiler';
import { asNativeElements, Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef}  from '@angular/core';

@Directive({
  selector: 'input,textarea[resaltar]' 
  // para que acepte a elementos input y textarea, especifique
})

export class ResaltarDirective implements OnInit {

  
  constructor(private me:ElementRef) {
    
   }

  //  para identificar la propiedad del componente
   @Input() color!:string;

  //  para poder interactuar con los componente que el HostListener va a escuchar con el evento
   @HostListener('input', ['$event']) onChangeInput(
    event: Event): void{

    let resaltar=Number;

    // si la longitud es mayor que 0 se pintara de verde 
    if (this.me.nativeElement.value.length>0){
      this.me.nativeElement.style.borderColor='green';
      this.me.nativeElement.style.color='green';
    } 
    // caso contrario tendra un borde rojo
    else{
      this.me.nativeElement.style.borderColor='red';     
    }
    
    // console.log(this.me.nativeElement.value);
    const initValue = this.me.nativeElement.value;
    // aqui el asNativeElements se reemplaza "replace" en la variable resaltar para calcular la longitud
    // que se hace en la condicional con el value.length para que muestre cierto estilo
    this.me.nativeElement.value = initValue.replace(resaltar)
  
  }
  
  // se inicializa a que elementos se estan referenciando el elemento
   ngOnInit(): void {
    console.log(this.me);
    this.me.nativeElement.style.color=this.color;
    
   }

}
