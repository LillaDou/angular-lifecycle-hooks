import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { Title } from '../../components/title/title';


const log = ( ...messages: string[] ) => {
  console.log( `${ messages[0] } %c${ messages.slice(1).join(', ') }`,
    'color: #bada55'  
  );
}
//El %c es para aplicar un estilo a la consola

@Component({
  selector: 'app-home-page',
  imports: [
    Title
  ],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit, OnChanges {

  traditionalProperty = 'Lilla';
  signalProperty = signal('Lilla');


  constructor() {
    log('Constructor llamado');

    //? setTimeout(() => {
      //? this.traditionalProperty = 'Juan Carlos';
      //? console.log('hecho')
      // Esta la forma tradicional de hacer cambios. Pero con el zoneless, a pesar de tenerlo puesto en el
      // constructor, no se ejecuta. El cambio no se hace

    //?   this.signalProperty.set('Juan Carlos');
      //Pero con el zoneless, las señales si se ejecutan, ya que el zoneless quiere hacer la aplicación
      // más eficiente. Por eso recomiendan trabajar con señales, pues pueden seguir en el momento que toca
      // los cambios de sus valores.
      // Siempre que se pueda, es importante trabajar con señales para evitar falsos positivos a la hora de
      // usar propiedades tradicionales
    //? }, 2000);
  };


  changeTraditional(){
    this.traditionalProperty = 'Lilla Doughty';
  }

  changeSignal(){
    this.signalProperty.set('Lilla Doughty');
  }


  basicEffect = effect( ( onCleanup ) => {
    log( 'effect', 'Disparar efectos secundarios');

    onCleanup( () => {
      log( 'onCleanup', 'Se ejecuta cuandop el efecto se va a destruir')
    })
  })


  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs.")
  }

  ngOnChanges() {
    log(
      'ngOnChanges',
      "Runs every time the component's inputs have changed.")
  }

  ngDoCheck() {
    log(
      'ngDoCheck',
      "Runs every time this component is checked for changes.")
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized.")
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      "Runs every time this component content has been checked for changes")
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized.")
  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes.")
  };

  ngOnDestroy() {
    log(
      'ngOnDestroy',
      'Runs once before the component is destroyed')
  };

  afterNextRenderEffect = afterNextRender( () => {
    log( 'afternextRender', 'Runs once the next time that all components have been rendered to the DOM')
  });

  afterEveryRenderEffect = afterEveryRender( () => {
    log( 'afterEveryRender', 'Runs every time all components have been rendered to the DOM.')
  })

}
