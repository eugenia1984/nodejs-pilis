# Instalando MySQL 

Instalando **MySQL** desde la página de Oracle con la versión 5.7.30, la versión más pesada. <br>
Click en **descargar** <br>
Movemos el instalador a la **unidad C**, si te abre bien el wizard, directamente continuás. Sino cerramos Power Shell y lo abrimos como administrador, con el comando **cd..** vamos hasta C: , con **ls** listamos los archivos.<br>
Y luego **mysql** + **enter** . <br>
Abre el instalador y ejecuto. <br>
Si con doble click no abre, se hace con la terminal. <br>
Para instalar elijo la parte de **custom** y selecciono: <br>
MySQL <br>
-Abro aplications, y utiliza **Table Plus** y el **Shell de mySQL** <br>
Con next y ejecutar instalamos ambos. Next. Next.<br>

Ahora a configurar mySQL, como **servidor** , **computadora de desarrollo**, el puerto por default, lo dejamos igual y le damos next. <br>
El usuario que viene por default es root, aca se puede definir un password, pongo root y root.<br>
Y no agrego usuario, para que no se me olvide. <br>
Next. <br>
Ejecutar. <br>
Hace la últimas cofiguraciones. <br>
Si elegis que no arranque, sino lo arrancás vos, tenes que ir a **Servicios**  y ejecutarlo como administrador. Y buscar mySQL 57, y lo inicias. <br>
Se puede abrir por terminal de Power Shell, con : <br>
```
mysql -u root -p
```
Enter y escribi el password (root) + enter <br>
Y arranco el servidor, para ver las bases de datos: <br>
```
show databases;
```
Hay cuatro base de datos por default. <br>
Por la misma terminal se puede crear datos, modificar, eliminar, hacer todo. <br>
Para salir con axit.<br>
Si te dio error: <br>
```
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.bash_profile
```
---

---

# Instalando TablePlus

Abrir como administrador, aceptar la licencia, dar los next, crear el ícono en el escritorio, instalar, launch y finich. <br>
Primero hay que conectarse al servidor local de mysql y creamos una conexion mysql, le damos un nombre : mysql, el puerto es: 3306, usuario: root, password: root, dejo como está, test, y conectar <br>
Se pueden ver las cuatro base de datos que ya trae, y le podemos crear otro nueva. <br>

También está Workbench, Sequel Pro (ya está deprecada) y XAAMP y Apache podes usar phpMyAdmin. <br>

---

# ORM - OBJECT RELATIONAL MAPPPING

Un **ORM** te permite **almacenar** / **leer** objetos en tu base de datos muy facilmente. <br>
Los **objetos ( object )** se definen con un lenguaje de programación. En esta caso con JavaScript en Nodejs, se crea un archivo (el modelo) y en el se define la forma que tienen estos datos. <br>
**Ralational** es la base de datos, donde se almacenan los objetos. <br>
**Mapping** es la unión de ambos en tus aplicacines webs. <br>

## Ventajas de utlizar un ORM

   * Evita la repetición de código ya que el modelo solo se define en un lugar y solo con importar el modelo al controlador tendrás acceso a todos los métodos del ORM.

   * Acelaran el proceso de desarrollo, ya que hay gran cantidad de métodos para el crud.

   * No es necesario escribir código SQL.

   * Seguridad, los ORM cuentan con sentencias preparadas para evitar la inyección de datos no esperados y cuentan con una gran cantidad de medidas de seguridad que hacen que no tengas que preocuparte por esto en tus aplicaciones.

   * Escrito en el lenguaje de tu aplicación.

## Desventajas

   * Aprender la sintaxis del ORM.
   * Instalarlo (en algunos casos es sencillo y en otros no tanto). A veces instalarlo localmente es un problema.
   * EL performance puede ser un poco más lento que consultas nSQL nativas, ya aue escribir en tu lenguaje de programación, no es consulta nativa.

## Un OR no es especídifo de Nodejs 

Muchos lenguajes tienen ORMS: <br>
PHP = propel t doctrine <br>
Java= hibernate <br>
python = SQL Alchemy <br>
C# = entity framework

## ORM'S en Node

**Sequalize** soporta: MYSQL, POSTGRESQL, SQL SERVER y SQLITE en tus aplicaciones Node. <br>
**Mongoose** es otro ORM que te permite conectar MONGODB con tus aplicaciones Node.<br>

## MODELO Y ORM

Usualmente los **modelos** y el **ORM** están muy relacionados, puede ser posible que sea difícil de comprender que es lo que hace cada uno. <br>
El **modelo** es un lugar único donde se describe la forma de los objetos y es fácil agregar / quitar campos para la base de datos, es la **estructura**. Mientras que el **ORM** tiene los métodos para la base dee datos. .<br>
Por ejemplo: <br>
   * El modelo describe la tabla de productos, que tiene un ID, nomre, código, precio, qué tipo de datos van a hacer.
   * El ORM tiene todos los métodos para crear nuevos productos, eliminarlos, actualizarlos, para relacionar productos con una nueva categoría.

Un ejemplo en código: <br>
MODELO, con Sequelize: <br>
```
const Usuario = db.define (
  'usuarios',
  {
    id: {
      type: Sequelize INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    password: {
      type: Sequelize STRING,
    },
    nombre: {
      type: Seqelize STRING,
    },
  }
```
ORM, ejemplo para crear un usuario, con Sequelize, para crear un usuario y para obtener un usuario y lo que queres del mismo (en este caso el email): <br>
```
const usuario = {
  password,
  nombre
}

Usuario.create(usuario);

Usuarios.findOne({
  where: {
    email
  }
})
```

---

## Instalando Sequelize

La ventaja es que para obtener todos los registros usamos .findAll en vez de un SELECT. Son muy sencillas. <br>
Tiene la parte de los modelos, que dicen cómo funciona la base de datos. Definis cómo se llama la tabla, qué campos contiene y qué tipo son.<br>

Para **instalar** en mi consola **mysql2** y **sequelize**: <br>

```
npm install --save mysql2
npm install --save sequelize
```
Hay que crear la configuración de Sequelize<br>

```
npm start
```
Para arrancar nuevamente el servidor. <br>
Y volvemos a VSC y creamos una nueva carpeta ( directorio ) y la conmbro **config**, donde voy a crear toda al configuración. Y dentro un archivo **db.js**. <br>

---

# Creando el modelo

Creo la carpeta ( el directorio) **models** y el archivo Proyectos.js. <br>
En el modelo vas a colocar toda la descripción de los campos de tu base de datos. <br>
```
const Sequelize = require('sequelize');
const db = new Sequelize('uptasknode', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: '3306 c'
  operatorsAliases: false,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
});

module.exports = db;
```
Y para poder iomportarlo. <br>
```
module.exports = Proyectos;
```

---

Hay que probar la conexión, para lo que vuelvo a index.js <br>
```
//crear la conexion a la base de datos
const db = require('./config/db');
```
Va a tener cierto métodos: <br>
```
db.authenticate()
  .then(()=> console.log('Conectando al Servidor'))
  .catch(error => console.log(error));
```

