# ¿Por qué Bootcamp?

Un **Bootcamp** es un curso muy especializado, intensivo y 100% práctico. <br>
Construiremos distintos proyectos que te llevarán desde los temas más básicos a los más avanzados. <br>
En la vida real un Bootcamp son varias horas por día, pero debes ver qué horarios te funcionan a vos, de acuerdo a tus compromisos y rutina.<br>

**Conocimientos previos**<br>
HTML5, CSS3, JavaScript.<br>
Saber qué es un servidor, base de datos, HTTP y las diferentes cosas que permiten crear sitios web y aplicaciones web.<br>

No te preocupes si algunos de estos temas (MVC -model view controler-, ORM o Template Engine) es nuevo para ti. Los vamos a aprender en este curso<br>

No hay un tiempo en específico para terminar el curso, en general debe tomar de 9 a 12 semanas. Lo principal es que adquieras los conocimientos, y lo ideal es no dejar de practicar más de 3 días.<br>

Los proyectos son todos prácticos, reales.<br>

# ¿Quienes utilizan Node.js?

Netflix antes usaba Java y migraron a JS entonces lo usan tanto en el front end como en el back end. <br>
Uber <br>
Grupon<br>
Paupal migro a Node porque antes los pagos eran un poco lentos.<br>
LinkedIn migro porque ahora el sitio web es 20 veces más rápido de antes, y la saber JS se puede usar tanto en front end como back end <br>
Waltmark <br>
El sitio web de la NAS<br>
Todas manejan millones de visitas en el día.

# ¿Qué es NODE y sus ventajas?

**NODE** o **NODE:JS** es lo mismo, es un **entorno de código abierto** , **multi-plataforma** que permite crear aplicaciones del lado del **servidor** en **JavaScript**, como otros lenguajes del back end como Python o Java.<br>
Permite crear **API'S**, **aplicaciones web** e incluso acceder a archivos y leer sus contenidos. Podes crear aplicaciones para la terminal, también de escritorios. Pero este curso se centra en aplicaciones webs.<br>

Sus **ventajas**: <br>
-**velocidad** y **rendimiento**, NODE fue pensado para solucionar estos problemas, ademas  es excelente para aplicaciones en tiempo real.<br>
-**JavaScript**, si ya tiene experiencia en JavaScript, ahora podés crear aplicaciones **FullStack** con Node sin necesidad de complicadores ni lenguajes extra.<br>
-**NPM**, NODE PACK MANAGMENT, una gran cantidad de paquetes y librerías de código abierto ya listos, entre ellos encontrarás subida de archivo, autenticación, enviar emails, template engines, seguridad y mucho más.<br>
Instalar paquetes NPM es fáil: npm install express -es lo que escribes en al terminal, express es el nombre del archivo, se guardan en dependencias.<br>
-Funciona en Windows, MAC y Linux.<br>
-Existe una gran cantidad de librerías, soporte, documentación, ejemplos y comunidad.<br>

# ¿Qué es EXPRESSJS y sus ventajas?

Introducción al framework de Node., para rear aplicaciones y sitios web con Node.<br>

### Sus ventajas:

-Es el framework web más popular de NODE, y es la herramienta sobra la que están desarrollados otros FrameWorks como MEAN; SAILS, LOOPBACK, GRAPHQL, YOGA y otros. Es muy popular y soporta todas estas plataformas<br>

-Soporta los diferentes vervos de HTTP como son POST (cuando envías datos al servidor), GET (cuando recibes datos al servidor), PUT(actualiza una pequeña parte des registro en la base de datos), PATCH (actualiza una pequeña parte des registro en la base de datos), DELETE (eliminar un registro) en las rutas (routes)<br>

-Soporta **vistas** que son los datos mostrados en la pantalla mediante determinadas respuestas (se ejecuta el controlador, el modelo, se verá con MVC).<br>

-Permites la creación de aplicaciones MVC que permiten tener una separación de código.<br>

-Soporta a MIDDLEWARE, mediante peticiones que se ejecutan en la tubería de petición.MIDDLEWARE EXPRESS se utiliza bastante, permite acceder a archivos, revisar si un usuario está autenticado o no, entre otras cosas.<br>
Ejemplo<br>
```
router.get('/adminisracion', 
  authController.usuarioAutenticado, 
  adminController.panelAdminsitracion
);
```
**authController.usuarioAutenticado,** y **adminController.panelAdminsitracion** es la tubería de autenticación, en el primero vemos si ese usuario ya se autentico, si la respuesta es verdadera se ejecuta el segunda, el panel de administración, no se ejecutan ambos al mimso tiempo. Y si el usuario no está autenticado lo podemos redirigir en el mismo middleware(en el mismo controlador) y lo podemos enviar a iniciar sesion.<br>

### Característias:

-El Middleware se **ejecuta en pila**, se ejecuta uno y después el otro, no se ejecuta de forma asíncrona, podemos ir verificando paso por paso. Podemos separar el código de manera más funcional, el proyecto va a ser fácil de leer y mantener.<br>
-En algunos casos el moddleware lo creas tu ( similar a crear rus propias funciones) o tamibén está disponible en Express una gran cantida d de Middlewares (por ejemplo para leer los datos de un formulario).<br>

### Desventajas:

-A diferencia de otros frameworkks como dJango o Laravel, Express no viene con **baterías incluidas** como puede ser autenticación, roles, orm o generador de modelos, estas piezas usualmente se instalan vía npm y se instalan en vía separada de modo quie **solo instalas lo que necesitas en tu aplicación** (lo cual puede ser una ventaja).<br>







