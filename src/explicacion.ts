


//? Los lifecycles son básicamente métodos/eventos que se llaman en momentos concretos
//* CONSTRUCTOR
//* Es llamado cuando se crea una instancia de nuestro componente. Es lo primero que se
//* ejecutará

// El ngOnInit se suele usar usualmente para hacer peticiones http immediatamente. Así el 
// componente está listo para ser usado

// El ngDoCheck se ejecuta cada vez que hay algún cambio en sí. Revisa si ha habido algún 
// cambio en el componente (cambio en alguna propiedad, señal...)

// El ngAfterContentInit se ejecuta cuando el componente se ha inicializado


// El ngOnChanges se dispara cada vez que los inputs de un componente cambian.
// En este caso, los inputs no son las cajas de texto que se rellenan. Hablamos de inputs
// cuando tenemos una señal de entrada (ejemplo: creamos una nueva propiedad name = input(...))