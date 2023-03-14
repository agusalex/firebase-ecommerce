# Proyecto Final Alexander [Click para demo](https://proyecto-final-alexander.vercel.app/)

Plataforma e-commerce construida con React, Firebase y LocalStorage. Permite a los usuarios agregar productos a su carrito y ver un resumen del pedido.

![alt text](https://github.com/agusalex/Preentrega2-Alexander/blob/main/acelerated-compressed.gif?raw=true)
![alt text](https://github.com/agusalex/Preentrega2-Alexander/blob/main/example-readme.png?raw=true)




## Instalación

Para ejecutar la aplicación en tu máquina local, sigue estos pasos:

1. Clonar este repositorio.
2. Instalar las dependencias utilizando `npm install`.
3. Crear una cuenta en Firebase y crea una nueva aplicación.
4. Agregar Items a Firestore
5. Iniciar la aplicación utilizando `npm run start`.

## Funcionamiento

### Añadir productos al carrito

Se puede agregar productos al carrito haciendo clic en el botón "Añadir al carrito" en la página del producto. Si el producto está fuera de stock, no sera posible agregar al carrito, tampoco si la cantidad deseada supera la maxima cantidad de stock.

### Persistencia del carrito

La aplicación utiliza LocalStorage para persistir el carrito del usuario.

### Resumen del pedido

Una vez que hayas agregado productos al carrito, podes ir a la página de resumen del pedido haciendo clic en el icono del carrito en la barra de navegación y hacer click en finalizar compra.

### Advertencia fuera de stock

Si se intenta agregar más productos de los que hay disponibles en stock, se mostrará un mensaje de advertencia indicando que no hay suficiente stock disponible.
