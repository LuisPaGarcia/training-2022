# Proyecto final - Training Telus

> El proyecto final consiste en realizar una colección de ejercicios que reespalden el conocimiento que formamos durante el entrenamiento. El projecto lo puedes encontrar en la carpeta `project` en este mismo directorio.

> Debes añadir estilos a tu app, puedes hacerlo con [Bootrstrap](https://getbootstrap.com/), [Tailwind CSS](https://tailwindcss.com/), o cualquier framework que gustes. Se sugiere que si es necesario uses una libreria de componentes, aunque se tomará en cuenta si un asistente crea los suyos.

> Al final, estos proyectos serán un entregable como su graducación del workshop hacia Telus.


Los 5 ejercicios que se solicitan son:

## Pomodoro (React)
### Especificaciones
- La Técnica Pomodoro es un método de gestión del tiempo desarrollado por Francesco Cirillo a finales de la década de 1980. Puedes leer más sobre ella [aquí](https://en.wikipedia.org/wiki/Pomodoro_Technique).
- Se utiliza un temporizador para dividir el trabajo en intervalos, generalmente de 25 minutos de duración, separados por breves descansos. Cada intervalo se conoce como pomodoro.
- Se necesita una aplicación con la que se pueda llevar el registro de pomodoros para un usuario web.
- El app debe ser capaz de manejar por lo menos 3 funcionalidades:
1. Iniciar un nuevo pomodoro (25min)
1. Iniciar un descanso corto (5min)
1. Iniciar un descanso largo (15min)

- Se necesita que la app muestre lo siguiente 
1. Mostar el tiempo restante del intervalo.
1. Guardar los ciclos que lleva el usuario en la sesión del browser.

- Extra points 🤹🏻
1. Emitir un sonido cuando finalice el el intervalo.
1. Subir tu código a un repositorio de Github.
1. Agrege pruebas unitarias a sus componentes (Con [Jest](https://jestjs.io/) o [React-Testing-Library](https://kentcdodds.com/blog/introducing-the-react-testing-library) por ejemplo)
1. Subir esta app a un servicio de capa gratuita como [Vercel.com](https://vercel.com/) o [Netlify.com](https://www.netlify.com/)

## Masked Input (React)
### Especificaciones
- Se necesita un medio de captura de datos para la solicitud de visa, debes crear un formulario que capture lo siguiente. 
- Debe asegurarse de que los campos tienen limitantes para escribir sobre ellos, usando patrones, expresiones regulares, o validaciones sobre cada entrada de datos.
- Todos los campos que no dicen "Opcional" deben ser mandatorios.
- Guarde los datos en un objecto JSON en el local storage por cada usuario ingresado, usando el email como key.

1. Nombres
1. Primer apellido
1. Segundo apellido
1. Fecha de nacimiento
1. Email
1. Dirección
1. Códigos de marcado de móviles internacionales (+502, +503, etc)
1. Número de teléfono
1. Número de teléfono de casa (Opcional)
1. Número de identificación personal (De tu país)
1. Número de pasaporte
1. Número de tarjeta de crédito
1. Mes y año de vencimiento de la tarjeta
1. El código de verificación de la tarjeta, o CVC.

1. Datos de emergencia (Opcional)
- 1. Nombres
- 2. Primer apellido
- 3. Segundo apellido
- 4. Fecha de nacimiento
- 5. Email
- 6. Dirección
- 7. Códigos de marcado de móviles internacionales (+502, +503, etc)
- 8. Número de teléfono

- Extra points 🤹🏻
1. Agregue manejo de errores par los inputs.
1. Subir tu código a un repositorio de Github.
1. Agrege pruebas unitarias a sus componentes (Con [Jest](https://jestjs.io/) o [React-Testing-Library](https://kentcdodds.com/blog/introducing-the-react-testing-library) por ejemplo)
1. Subir esta app a un servicio de capa gratuita como [Vercel.com](https://vercel.com/) o [Netlify.com](https://www.netlify.com/)


## JSON to CSV (React)
### Especificaciones
- Necesitamos una herramienta online para transformar un formato JSON a CSV. 
- La UI debe tener 2 inputs, uno para ingresar el JSON y otro para poder copiar el resultado en CSV.
- La UI debe incluir (Por lo menos) 3 botones:
1. Un botón para hacer la transformación de JSON a CSV.
2. Un botón para formatear el JSON de entrada.
3. Un botón para limpiar la entrada y el resutado.

El formato JSON esperado es uno similar a este:

```js
[
   {
      "id": 1,
      "name": "Johnson, Smith, and Jones Co.",
      "amount": 345.33,
      "comment": "Pays on time"
   },
   {
      "id": 2,
      "name": "Sam Mad Dog Smith",
      "amount": 993.44,
      "comment": ""
   },
   {
      "id": 3,
      "name": "Barney & Company",
      "amount": 0,
      "comment": "Great to work with and always pays with cash."
   },
   {
      "id": 4,
      "name": "Johnson's Automotive",
      "amount": 2344,
      "comment": ""
   }
]
```
Y la salida esperada usando el ejemplo seria:

```txt
id,name,amount,comment
1,"Johnson, Smith, and Jones Co.",345.33,Pays on time
2,Sam Mad Dog Smith,993.44,
3,Barney & Company,0,Great to work with and always pays with cash.
4,Johnson's Automotive,2344,
```

- Extra points 🤹🏻
1. Crear un boton que inserte un ejemplo de input de JSON en el campo de entrada.
1. Subir tu código a un repositorio de Github.
1. Agrege pruebas unitarias a sus componentes (Con [Jest](https://jestjs.io/) o [React-Testing-Library](https://kentcdodds.com/blog/introducing-the-react-testing-library) por ejemplo)
1. Subir esta app a un servicio de capa gratuita como [Vercel.com](https://vercel.com/) o [Netlify.com](https://www.netlify.com/)


## URL Shortener (React.js + Node.js)
### Especificaciones
- Necesitamos una forma en la cual pueda acortar URLs válidas, creando una URL corta que redirija a nuestra URL original.
- Debe existir un input que reciba un link como https://www.youtube.com/watch?v=Z-48u_uWMHY, y me devuelva un link acortado como http://localhost:5000/redirect/{hash de 5 valores aleatorios}
- Al momento de ingresar a http://localhost:5000/redirect/{hash de 5 valores aleatorios}, debe redireccionarme a la URL original: https://www.youtube.com/watch?v=Z-48u_uWMHY
- La app debe guardar (Solamente en memoria) logs de cuantas veces se usó el link.


- Extra points 🤹🏻
1. Crear un boton que inserte un ejemplo de input de JSON en el campo de entrada.
1. Subir tu código a un repositorio de Github.
1. Agrege pruebas unitarias para tus funciones (Con [Jest](https://jestjs.io/) o [Mocha](https://www.geeksforgeeks.org/unit-testing-of-node-js-application/) por ejemplo)
1. Subir esta app a un servicio de capa gratuita como [Vercel.com](https://vercel.com/) o [Netlify.com](https://www.netlify.com/)


## One time Secret (React.js + Node.js)
### Especificaciones
- Necesitamos una forma de poder crear secretos que solamente se puedan ver una vez, y luego sean destruidos.
- La aplicación debe incluir un input con el secreto que se espera que sea en texto.
- Un botón que guarde y genere un link único para acceder ae este secreto.
- Cuando se ingresa al link por primera vez, aparece una UI que muestra el secreto.
- Si el link vuelve a ser visitado, no mostrará el secreto. Por eso se llama OneTimeSecret.


- Extra points 🤹🏻
1. Que al crear el secreto, se pueda elegir cuantas veces puede ser visitado el link del secret. Por default será 1.
1. Subir tu código a un repositorio de Github.
1. Agrege pruebas unitarias para tus funciones (Con [Jest](https://jestjs.io/) o [Mocha](https://www.geeksforgeeks.org/unit-testing-of-node-js-application/) por ejemplo)
1. Subir esta app a un servicio de capa gratuita como [Vercel.com](https://vercel.com/) o [Netlify.com](https://www.netlify.com/)
