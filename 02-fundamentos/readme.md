# let vs var

Con `let` no podes volver a inicializar la variable, al menos que este en otro __scope__

Ejemplo de inicializacion de una variable en distintos: __scope__
```js
let nombre = 'Wolverine'

if (true) {
    let nombre = 'Magento'.
}

console.log(nombre);

//devuelve Wolverine
```

En cambio si usamos `var` siempre el valor va a ser el que esté mas abajo.

```js
var nombre = 'Wolverine'

if (true) {
    var nombre = 'Magento'.
}

var nombre = 'James'

console.log(nombre);

//devuelve James
```

Otro ejemplo de __Scope__ con `var` y `let`

```js
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
console.log(i)

//devuelve del 0 al 5 y un 6 porq mantiene el valor 
```

```js
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log(i)

//devuelve error de que la variable i no esta definida, ya que el scope de i es en el for y no por fuera
```

# Destructuracion

Podes traerte las propiedades de un objeto asi

```js
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);
```

Como vemos en el ejemplo tambien se le puede dar un alias para que no haya conflicto con otra variable de tu sistema usando `nombre:primerNombre`