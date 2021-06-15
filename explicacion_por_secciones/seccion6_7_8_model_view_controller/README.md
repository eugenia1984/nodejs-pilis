# MVD (Model View Controller / Modelo Vista Controlador)

Patrón de diseño **MVC**, ¿qué es? <br>
-Patrón de diseño de software que permite la separación de obligaciones de cada pieza de código, en tu aplicación web(porque este proyecto es para aplicación web, pero también hay para aplicaciones móviles). <br>
-Enfatiza la separación de la **lógica de programación** y lo que **se muestra en pantalla**. Los datos que se muestran en pantalla vienen de una vista, pero se almacenan en un modelo.<br>

## Model (Modelo)

Encargado de los **datos** (desde una base de datos) y de la **lógica** para mostrar esos datos. <br>
Es el modelo donde realizar la consulta en la base de datos y le da la forma a los objetos. <br>
Por ejemplo: un usuario quiere ver la sección de productos, el modelo se encarga de realizar la consulta a la base de datos, y lo que se ve en pantalla corresponde a la vista.

## View (Vista)

Se encarga de **lo que se ve en pantalla** (HTML).<br>
Por ejemplo: si el modelos hace la consulta a la base de datos para los productos, es la vista la que uestra esos resultados.<br>

## Controller (Controlador)

Es el que se **comunica entre el modelo y la vista**, antes de que el modelo consulte a la base de datos es el encargado de mandarlo llamar, y también una vez que el modelo tiene los esultados de la consulta, es el que se encarga de pasarlos a la vista. <br>

## Router 

Encargado de resgistrar toas las URL'S o **endpoints** que la aplicación soporta. <br>
Por ejemplo, si el usuario accede a /productos, el **router** llama un **controller**, que se comunica con el **model** para obtener los datos que son pasados hacia la **vista** para ser mostrados. <br>
Los datos del model van al controller y este lo pasa a la vista, es decir que todo pasa por el controller.

---

# Creando el controlador de los proyectos

Dentro de mi carpeta raiz creo la carpeta (el directorio) **controllers** y dentro de ella el archivo : **proyectoControllers.js** en el que voy a exportar las vistas: <br>
```
exports.proyectosHome = (req, res) => {
  res.send('Index');
}

```
Que están en mi index.js de la carpeta raiz: <br>
```
module.exports = function (){
   // ruta para el home
   router.get('/', proyectosController.proyectosHome);
}
```
---

## Agregando Model View Controller : Template Engines (motores de plantilla)

### ¿ Qué son?

Son la **V ( vista)** del MVC. <br>
Permiten mostrar la parte visual **( HTML )** en una aplicación express, debido a que el modelo retorna un objeto ( o arreglo) de datos, un **template engine** permitirá acceder a los resultados de una consulta y mostrarlos en pantalla. <br>

### Características:

   * Hay uina gran variedad y cada uno tiene su propia sintaxis. <br>
   * Usualmente puedes escribir código JavaScript dentro de HTML, se compila y termina siendo un código HTML plano. <br>
   * Si tienes experiencia en Angular, React o Vue, usualemtne reemplazan estos template engines en una aplicación de Nodejs. Hay consideraciones, pero se pueden integrar bien.<br>

### Los más comunes para Espress:   
   * PUG - antes Jade
   * EJS -  embedded JS
   * HBS - handlebars.js, un sistema de templates bastante común hace tiempo y sigue siendo popular, se fuciona con mustache.js
   * React

###  Un template engine se instala vía npm
Un ejemplo con pug: <br>
```
npm install pug
```
Pero lo tenes que habilitar en el archivo principal : <br>
```
//Habilitar pug
app.set('view engine', 'pug');
```

### Un ejemplo de sintaxis de cada uno:

**PUG** con un ejemplo de iteración de tareas:<br>
```
if tareas.lenght
  each tareas in tareas
    li.tarea(data-tarea=`${tarea.id}`)
      p=tarea.tarea
```

**HANDLEBARS** si necesitamos etiquetas de apertura y cierre y lo dinámico va entre {{}} :<br>
```
<div class="caja">
  <p class="etiqueta">Empresa:<p>
  <p class="nombre">{{vacante.empresa}}</p>
</div>
<div>
  <p class="etiqueta">Ubicación</p>
  <p class="nombre">{{vacante.ubicacion}}</p>
</div>  
```

**EJS** sigo teniendo etiquetas de apertura y cierre pero <% aclara que lo ignore porque es JS, y donde tiene un - o signo de = es para imprimir, si no lo tiene es para evaluar, como el caso de la imagen: <br>
```
<div class="informacion-usuario">
  <div class="imagen">
    <% if(usuario.imagen) { %}>
      <img src="/uploads/perfiles/<%= usuarioimagen %>">
    <% } %>
  </div>
  <div class="texto">
    <%- usuario.descripcion %>
  </div>
</div>      
```

---

Para saber más se puede ver este repositorio de GitHub : <br>
**https://github.com/expressjs/express/wiki#template-engines** <br>
Hay muchos templates, podes ver con cuál te sentís mejor.<br>

---

## Para instalar PUG

```
npm install --save pug
```
Y una vez instalado, vuelvo a ingresar: <br>
```
npm run start
```
---

## Para agregar rutas:

  * Hay que agfregarla en el **router**
  * Definir la parte del controlador 
  * Agregar la vista

---

## Crear formulario

En el archivo nuevoProyecto.pug : <br>

```
form.agregar-proyecto
      .campo 
        label(for="nombre") Nombre Proyecto :
        input(type="text" id="nombre" name="nombre" placeholder="Nombre Proyecto")
      .campo.enviar 
        input(type="submit" value="Agregar" class="boton") 
```
Para que en formulario pueda agregar los datos, hay que utilizar el método **POST** en mi directorio **router** y en el archivo **index.js** . <br>
En el mismo archivo nuevoProyecto,pug debo tener el action y el metodo ( POST , para que en la url del navegador no se vean los datos ) en mi formulario <br>
```
form.agregar-proyecto(action="/nuevo-proyecto" method="POST") 
```
Y en el index.js del directorio **router** debo agregar mi método post: <br>
```
router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
 ```
 En mi **index.js** en la parte de los módulos que exporto: <br>
```
router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
```
Y luego en mi directorio **controllers** en el archivo proyectosController.js debo agregar: <br>
```
exports.nuevoProyecto = (req, res) => {
  res.send('Enviaste el formulario');
}  
```
---

## Leyendo los datos dle formulario

Para poder leer los datos voy a tener que exportar la librería body Parser, en mi **index.js**

```
const bodyParser = require('body-parser');

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));
```
Y si agregamos un nuevo proyecto y hacemos click en Agregar, por consola vemos el texto que infgresamos. En la consola se imprime {nombre: aca_el_nombre_que_ingreso_al_nuevo_proyecto}<br>

---

## Validación simple de un formulario

Para validar que el usuario efectivamente agrega algo y no queda vacío el campo de agregar. <br>
Entonces en mi directorio **controllers** en el archivo proyectoControllers : <br>
```
exports.nuevoProyecto = (req, res) => {
  //Enviar a la consola lo que el usuario escriba
  //console.log(req.body);

  //validar que tengamos algo en el input, con desestructuracion
  const {nombre} = req.body;
  
  let errores = [];

  if(!nombre) {
    errores.push({'texto': 'Agrega un nombre al Proyecto'})
  } 
  // Si hay errores
  if(errores.lenght > 0) {
    res.render('nuevoProyecto', {
      nombrePagina : 'Nuevo Proyecto',
      errores
    })
  }

}  
```
Nos queda todavía pendiente si no tenemos errores, como pasamos los datos a la base de datos <br>
Y como estoy usando la vista de nuevoProyecto, voy a mi directorio de **viewss** a nuevoProyecto.pug y antes del formulario agrego: <br>
```
  if errores
      each error in errores
        .alerta= error.texto
```
Para poder iterar el arreglo de errores. <br>


