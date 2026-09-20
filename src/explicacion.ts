
//? Los lifecycles son básicamente métodos/eventos que se llaman en momentos concretos

// Se pueden ejecutar con el ng al principio como un método. Pero si queremos forzar o asegurarnos
// de que se ejecute la función, o queremos dejar claro a otras personas lo que se va a 
// inicializar cuando se crea el componente, utilizamos el 'implements OnInit' + el método definido
// debajo


//* CONSTRUCTOR
//* Es llamado cuando se crea una instancia de nuestro componente. Es lo primero que se
//* ejecutará

// El ngOnInit se suele usar usualmente para hacer peticiones http immediatamente. Así el 
// componente está listo para ser usado

// El ngDoCheck se ejecuta cada vez que hay algún cambio en sí. Revisa si ha habido algún 
// cambio en el componente (cambio en alguna propiedad, señal...)

// El ngAfterContentInit se ejecuta cuando el componente se ha inicializado

// El ngOnDestroy es un método muy útil para hacer limpieza de timers, intervalos de tiempo, cancelar 
// de suscripciones...

// El efecto se dispara tan pronto como se ha inicializado el componente. En este caso, aparece despu'es del constructor, 
// ngOnInit y ngDoCheck.
// Se pueden utilizar para hacer tareas específicas. No es recomendado usarlo para peticiones http, 
// ya que es algo muy volatil. Para ello es mejor usar el resource o el rxResource
// Dentro del efecto tenemos el onCleaup. Se comporta muy similar al ngOnDestroy, ejecutandose cuando
// el efecto se va a destruir.

// El ngOnChanges se dispara cada vez que los inputs de un componente cambian.
// En este caso, los inputs no son las cajas de texto que se rellenan. Hablamos de inputs
// cuando tenemos una señal de entrada (ejemplo: creamos una nueva propiedad name = input(...)).
// Usando el ejemplo en el title component:
// Si nosotros necesitamos que cambie o que se ejecute algo cuando cambia el valor de un input property
// (en este caso, el title), tenemos que verificar primero si es el primer cambio de este o no, porque el
// previous value puede venir nulo.