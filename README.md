# react-front

### Para ejecutar

Hacer cd al directorio de `react-frontend` y hacer `npm install` para instalar las dependencias y luego `npm start` para arrancar el proyecto.
Mi versión de Node es la v.20, no sabría decir si funciona para la v.18

### Notas

Dos grandes cosas no funcionan bien, aparte del CSS (por tiempo):

+ El EventStream para consumir el SSE en el frontal no funciona. Sí funciona el botón para pujar, sin embargo.
+ Por alguna extraña razón, no capturaba bien las headers, a pesar de que las recibía correctamente. Así, he tenido que hardcodear por lo pronto el token de sesión y la id del usuario *logeado*, que deberían de corresponderse (por si las moscas).
  

Además, la página de favoritos y la de productos usan el mismo componente, y por como funciona la optimización de React con respecto 
al árbol de componentes, no lo *re-renderiza* al pasar de uno al otro directamente, por lo que los parámetros de paginación [limit, offset] 
se conservan y pueden dar lugar a algún bug (por ejemplo, en la lista global de productos el offset es 20 (2da página) y al pasar a favoritos
no se muestra nada porque no hay más de 20 elementos y el offset sigue siendo 20)

Finalmente, el estilado es todavía mediocre y está a medio hacer.
