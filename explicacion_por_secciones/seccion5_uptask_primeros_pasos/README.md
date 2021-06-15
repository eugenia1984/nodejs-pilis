## Repositorio:

En ***GitHub** está el repositorio del código fuente para ver ante algún inconveniente que tenga con mi código: <br>
**https://github.com/juanpablogdl/uptasknode** <br>
Yo escribi todo mi código, pero dejo este link, por si en algún momento algo no me unciona veo el código fuente del proyecto.<br>
Va a ser un administrador de tareas.<br>

## Creando el proyecto  
En el escritorio de mi pc creo la carpeta **UpTaskNodeJS** <br>
Voy a mi terminal y entro al directorio que recien cree **UpTaskNodeJS**: <br>
```
cd Desktop/UpTaskNodeJS
```
Y luego <br>
```
npm init
```
Y veo: <br>
```
npm notice
npm notice New minor version of npm available! 7.13.0 -> 7.14.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v7.14.0
npm notice Run npm install -g npm@7.14.0 to update!
npm notice
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (uptasknodejs)
```
Nos va a crear un archivo de packaje JSON y al final de todo el nombre: **package name: (uptasknodejs)** <br>
Luego nos muestra la versión: **version: (1.0.0)** <br>
Y debemos ingresar la descripción: <br>
```
description: Proyecto UpTask con Node y MVC
```
Luego el entry point que está bien <br>
```
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```
De este modo podes copiar la URL de tu repositorio de GitHub y ya lo ingresas.<br>
Podes poner tu nombre como Autor.<br>
```
{
  "name": "uptasknodejs",
  "version": "1.0.0",
  "description": "Proyecto UpTask con Node y MVC",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Y le damos a yes porque esta ok.<br>
Abrimos la carpeta **UpTaskNodeJS** que tenemos en el escreitorio y vemos que ya tenemos **package.json** es el archivo donde guardaremos los scripts de npm y las dependencias tanto del proyecto como las que son de desarrollo.<br>

### Instalamos algunas dependencias:
Voy a instalar dependencias con 
```
npm  i --save express
```
ó también: <br>
```
npm  install --save express
```
Estas dependencias son open source, voy a ver que se me instaló ok, porque leo: <br>
```
added 50 packages, and audited 51 packages in 2s
```
Express es exportar una librería que nos va a simplificar mucho. Al instalar una dependencia voy a ver node modules, y veo muchas carpetas ya instaladas. Es una dependencia de proyecto, proque va a estar montado en Express.  <br>
Pero hay otras dependencias que son necesarias en la etapa de desarrollo, en este caso **nodemon**, que nos ayuda detectando los cambios en los archivos al hacerlos, reinicia el servidor y podemos chequear esos cambios: <br>
```
npm install --save-dev nodemon
```
Y se que se me instaló porque leo: <br>
```
added 117 packages, and audited 168 packages in 5s
```
Y en mi archivo **packege.json** veo: <br>
```
"dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
```
## Package.json
Podemos eliminar la carpeta **node.modules** porque va a ser una carpeta muy grande, muy pesada,  y también podemos eliminar **package-lock.json** que contiene cómo están relacionadas las dependencias de las dependencias (express y nodemon tiene dependencias). <br>
En el caso de que quiera reestablecer las dependencias debo ingresar: <br> 
```
npm install
```
---
### Y hora ya directamente voy a la carpeta de UpTaskNodeJs y empiezo a trabajar en el proyecto, para crear mi servidor, básicos dle router y creando un archivo de rutas

Para **crear un servidor** en mi **index.js** : <br>
```
const express = require('express');  

const app = express();

app.use('/', (req,res) => {
  res.send('Hola')
});

app.listen(3000);
```
Y en mi **packege.json** voy a modificar la parte del script: <br>
...<br>
```
  "scripts": {
    "start": "nodemon ./index.js"
  },
```
...<br>
Y ahora para crear los archivos, voy a crear la carpeta (el directorio) **routes** y dentro mi archivo **index.js**, ver todo lo anotado en dicho archivo. <br>
Entonces en: routers/index.js: <br>
```
const express = require('express');
const router = express.Router();  

module.exports = function (){
  //Ruta para el home
  router.get('/', (req,res) => {
    res.send('Index');
  });
  router.get('/nosotros', (req,res) => {
    res.send('Nosotros');
  });
  return router;

}
```
Y en mi index.js de la carpeta UpTaskNodeJS: <br>
```
const express = require('express');  
const routes = require('./routes');  //agrego esta linea

const app = express();

app.use('/', routes());  //Agrego esta linea

app.use('/', (req,res) => {
  res.send('Hola')
});

app.listen(3000);
```