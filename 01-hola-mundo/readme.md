# explicacion app3.js

El output es:

1. Inicio programa
2. Fin del programa
3. Segundo Timeout
4. Tercer Timeout
5. Primer Timeout

Esto es porq node maneja 3 partes:

1. Pila de procesos (call stack)
2. Node Apis
3. Cola de callbacks

1. Lee Primero lee inicio del programa.
2. Entra el Timeout en el __Call Stack__ pero lo manda a __Node Apis__ esperando que ejecute, una vez terminado lo manda a la __Cola de callbacks__ y una vez que termina de leer todo el documento (ya habiendo leido tambien __Fin del programa__) vuelve a mandar desde __cola de callbacks__ hacia el __Call Stack__ los resultados en el orden que los fue recibiendo, en la __cola de callbacks__

# Instalar nodemon
1. `npm install -g nodemon`
2. Es un watcher de cambios.