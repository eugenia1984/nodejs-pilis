/*
TEMAS: REFORZAMIENTO DE ES6 Y ES7
LET, VAR, CONST
TEMPLATE LITERALS
DESTRUCTURACION
ARROW FUNCTION
CALLBACKS Y CALLBACKS EN CADENAS
PROMESAS Y PROMESAS EN CADENA
ASYNC Y AWAIT
*/

//LET, VAR, CONST
//Siempre mejor usar LET y CONST antes que VAR(porque var es de alcance global).
//Caso 1:
var nombre = 'Wolvering';
if (true) {
  nombre= 'Magneto';
}
console.log(nombre); //Magneto
//Caso 2:
var nombre2 = 'Wolvering';
if (true) {
  var nombre2= 'Magneto';
}
console.log(nombre2); //Magneto porque var tiene alcance global, comienza valiendo Wolvering, pero dentro de mi if se sobreescribe el valor a Magneto y lo tiene luego del if tambien
//Caso 3:
let nombre3 = 'Wolvering';
if (true) {
  let nombre3= 'Magneto';
  console.log(nombre3); //Magneto porque este nombre al ser con let tiene alcalce global, solo existe dentro del if
}
console.log(nombre3); //Wolvering porque al estar fuera del if es el valor que declare al principio
//Caso 4:
let nombre4 = 'Wolvering';
if (true) {
  nombre4= 'Magneto';
}
console.log(nombre4); //Magneto porque dentro del if al o tener let no redeclaro la variable, entonces sube al primer let
//caso 5:
const nombre5 = 'Wolvering'; //Las constantes son numeros que no cambian, lo bueno es que es de ambito local, por lo que podrias crear otra const nombre5 dentro del if
if (true) {
  const nombre5= 'Magneto'; //Me queda en gris porque esta nunca se usa, ya que su alcance es local
}
console.log(nombre5);
//TEMPLATE LITERALS(TEMPLATE STRINGS) con los BACKTICKS (ALT + 96)
let nombre = 'Eugenia';
console.log(`Hola ${nombre}`);  //Mezclo el string con la varaible, todo junto, sin tneer que poner el + para concatenar, adentro de los {} también puedo hacer cuentas.
console.log(`Hola, este es 
un mensaje
multilinea`);  //se va a ver en tres renglones, con los enters respeta los renglones, no es necesario poner barra invertida +n

//DESTRUCTURACION
const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'regeneración',
  getNombre() {
    return `${this.nombre} ${this.apellido} $ {this.apellido}`
  }
}
const {nombre, apellido, poder} = deadpool; //const {las key separadas con ,} = objeto
console.log(nombre, apellido, poder); // Wade Winston regeneración
//Me ahorro mucho código, sino tendría tres lineas de codigo:
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
//También al desestructurar puedo agregar una key al objeto y la puedo inicializar, x el: const {nombre, apellido, poder, edad = 0} = deadpool;

//Puedo desestructurar un objeto directamente como argumento de una función, x ej:
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
  //Lo unico que si aca por ejemplo hago nombre= 'Eugenia' estaría cambiando el valor de nombre, porque no estaba guardado en constante
   console.log(nombre, apellido, poder, edad);  
}
//Sino tendría así:
//function imprimeHeroe(heroe) {
//  const {nombre, apellido, poder, edad = 0} = heroe;
//  console.log(nombre, apellido, poder, edad);
//}

//Puedo desestructurar un ARRAY DE OBJETOS

const heroes = ["Deadpool", "Superman", "Batman"];

const[h1,h2,h3] = heroes; //hago la desestructuración

console.log(h1,h2,h3); //Deadpool Superman Batman

const [ , , h3] = heroes; // Si quiero solo uno de los tres, dejo los espacios en blanco, y separo con ,

console.log(h3); //Batman

//ARROW FUNCTION

function sumar(a,b) {
  return a + b;
}

sumar(5,2); // 7
//Ojo que si paso un solo número como parámetro, entonces el otro número es UNDEFINED y el return será NaN, para eso lo soluciono, inicializando en function sumar (a =0, b=0)

//En cambio para arrow function:
const sumar = (a,b) => a+b;

//Acá también puedo inicializar las variables: (a=0,b=0)
//En este caso no use {} ni return, proque el cuerpo de la función solo tiene una linea y es el return, si tiene más de una línea si van las {} y el return
//Si tenemos una función sin argumentos, x ej: const saludar = () =>"Hola mundo";

//CALLBACKS Y CALLBACKS EN CADENAS

//El tipico ejemplo de buscar un ID y traerlo, aca pongo un setTimeout porque simulo que busca la info y demora un poco

/*
const getUduarioByID = (id) => {
  const usuario = {
    id,
    nombre: "Fernando"
  }
  setTimeout( ()=> {
    console.log(usuario)
  },1500)
}
//Ahora lo hago con callback, una función que traiga a otra función
const getUsuarioByID = (id) => {
  const user = {
    id,
    nombre: "Fernando"
  }
  setTimeout( ()=> {
    callback(usuario)
  },1500)
}

getUsuarioByID(10,(user) => {  //Llamo a la funcion user que la guarde en la constante dentro d ela funcion getUsuarioByID que declare arriba
  console.log(usuario.id);
  console.log(uusuario.nombre.toUpperCase());
});  
*/


//CALLBACKS HELL

//constante empleados que es un array de objetos
const empleados = [  
  {
    id: 1,
    nombre:"Fernando"
  },
  {
    id: 2,
    nombre:"Linda"
  },
  {
    id: 3,
    nombre:"Karen"  //puedo tener o no la ,
  },
];
//No tenemos el salario de Karen
const salarios = [
  {
    id: 1,
    nombre:1000
  },
  {
    id: 2,
    nombre:1500
  },
]; 
//e representa al empleado es un arrow function
//const getEmpleado=(id) = {
//  const empleado = empleados.find{e => e.id === id} 
//  return empleado;
//}
console.log(getEmpleado(5)); //E este caso no existe el empleado 5, entonces me da UNDEFINED, tenemos que avisar que el empleado no existe, entonces:
const getEmpleado=(id) = {
  const empleado = empleados.find{e => e.id === id} 
  if (empleado) {
    callback(null, empleado); //El null es un falsy en JS por lo que no se ejecuta
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
}
getEmpleado((5,(err,empleado))=> { //paso como argumento el caso del error, para que si el empleado no existe me avise  
  if (err) {
    console.log("ERROR!");
    return console.log(err);
  }
  console.log("Empleado existe!");
  console.log(empleado.nombre);
});

//Otro ejemplo haciendo algo similar con el salario
const getSalario = (id,callback)=>{
  const salario = salarios.find(5 => 5.id ===id)?salario; //operador ternario
  if (salario) {
    callback(null, salario);
  } else {
    callback("No existe el salario");
  }
}
getSalario(id, (err, salario=> {
  if (err) {
    return console.log (err);
  }
  console.log(salario);
}));
//Si necesitara el nombre y luego el salario dentro de getEmpleado tengo que ir anidando, y así  iría anidando todo y termino teniendo un callback-hell.
//Este sería SIN PROMESA
/*
const getEmpleado((id, callback) => {

  const empleado = empleados.find(e => e.id === id)?,empleado //hacemos la pedicion al array buscando el empleado

  if (empleado) {
    callback(null, empleado); //El null es un falsy en JS por lo que no se ejecuta, si existe
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
}

const getSalario = (id,callback) => {

  const salario = salarios.find(5 => 5.id ===id)?salario; //operador ternario

  if (salario) {
    callback(null, salario);
  } else {
    callback("No existe el salario");
  }
}
getSalario(id, (err, salario=> {
  if (err) {
    return console.log (err);
  }
  console.log(salario);
}));
*/



//PROMESAS Y PROMESAS EN CADENA
//Ayudan a trabajar con el callback hell

//Asi es con promesa:
const getEmpleado = (id) => {

    //en vez de poner el return abajo de todo como me devuelve new Promise, lo pongo arriba en vez de declarar una const e igualar a new promise
    return new Promise( ( resolve, reject) => { 

      const empleado = empleados.find( e => e.id === id)?.nombre; //hacemos la pedicion al array buscando el empleado
      //Es propio de JS, no tengo que importar nada, solo llamar a new promise y le paso como argumento una callback que tiene el resolve(si esta todo ok) y el reject(si hay algun error), esos nombres los pongo yo, pero son standard
      //es el cuerpo del callbak, de la promesa
      //uso un operador ternario para simplificarlo
      (empleado) 
        ? resolve(empleado)
        : reject(`No existe el empleado con id ${id}`);

    });
}

const id = 1; //le doy al id 1 para tener el caso de que tengo empleado
getEmpleado(id)
  .then(empleado => console.log(empleado));
  .catch(err => console.log(err)); //si sucede el eeror ejecuta esto


//Ahora hacemos lo mismo pero con salario, primero pregunto lo dle empleado y si existe busco lo dle salario
const getSalario = (id) => {

  return new Promise( ( resolve, reject) => { 

    const salario = salarios.find( s => s.id === id)?.salario; 

    (salario) 
      ? resolve(salario)
      : reject(`No existe el salario con id ${id}`);

  });
}

const id = 1; 
//Una forma de manejar PROMESAS EN CADENA QUE SE TORNA BASTANTE ENGORROSO
/*
getEmpleado(id)
  .then(empleado => {
 
     getSalario(id)
      .then(salario => {

        console.log('El empleado: ', empleado, 'tiene un salario de: ', salario)

      })
      .catch (err => console.log(err))
      
  })
  .catch (err => console.log(err))
  */

//MEJOR FORMA DE REFACTORIZAR EL CODIGO Y NO TENER OTRO CALLBACKHELL PERO EN LAS PROMESAS, VAMOS A HACER PROMESAS EN CADENA

const id= 1;
let nombre;

getEmpleado(id)
    .then (empleado =>{
        nombre = empleado;
        return getSalario(id)
    })
      //aca ya tengo mi empleado, pero necesito otra promesa para mandar a llamar al salario entonces me evito el getSalario metiendo un return en el cuerdo de la funcion retornando el id, y me ahorro el .then(), porque el callback regresa promesa y concateno otro then
      //Y como el return seria asi: return getSalario(id); , al ser arrow function le puedo sacar los {} y el return, me queda una sola linea de codigo
    .then (salario => console.log('EL empleado: ', nombre, 'tiene un salario de: ', salario))
    //Pero aca tengo el inconveniente del manejo del error si no tengo el salario, necesito usar la variable nombre, asi que voy a volver a poner los {} y el return dentro del then(empleado,.....)
    //Y en el segundo then() mando el mensaje con el nombre y el salario
    //Pero me falta todavia el manejo del error
    .catch(err=>console.log(err));


//ASYNC Y AWAIT
//ME copio las dos promesas de antes
const getEmpleado = (id) => {

  return new Promise( ( resolve, reject) => { 

    const empleado = empleados.find( e => e.id === id)?.nombre; 

    (empleado) 
      ? resolve(empleado)
      : reject(`No existe el empleado con id ${id}`);

  });
}

const getSalario = (id) => {

  return new Promise( ( resolve, reject) => { 

    const salario = salarios.find( s => s.id === id)?.salario; 

    (salario) 
      ? resolve(salario)
      : reject(`No existe el salario con id ${id}`);

  });
}
//AWAIT: JS esperate hasta tener la respuesta de la promesa, cuando la tengas asignala, siempre debe estar dentro de una funcion o metodo ASINCRONO
//Me creo una variable

const getInfoUsuario = async(id) => { 
  //Manejo el error adentro con try catch
  try{
  const empleado = await getEmpleado(id);
  const salario = await getSalario(id);
  return `El salario del empleado ${empleado} es de ${salario}`;
  
} catch (error) {
    throw error; //llamamos el reject de la funcion asincrona
  }

}

const id=3;
//con el ASYNC transformamos una funcion en funcion asincrona, y entonces la funcion me devuelve una promesa
getInfoUsuario(id).  //Mando como argumento el id para poder usarlo dentro de getInfoUsuario con la const empleado
  then( msg => 
    console.log('TODO BIEN!')
    console.log (msg)) //Me va a devolver como mensaje el nombre del empleado
  .catch(err=> 
    console.log('TODO MAL!')
    console.log(err));

