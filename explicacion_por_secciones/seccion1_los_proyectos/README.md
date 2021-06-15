# Los proyectos que vamos a crear:


### Up task

Tiene un inicio de sesion, se puede crear una cuenta si no tenes, se corrobora si tu usuario anteiormente tuvo cuenta. <br>
Si te logueas tenes acceso a tu panel, desde donde podes crear un nuevo proyecto, en los mismos podes agregar tareas, las podes marcar como completas y eliminarlas. Puedo editar el proyecto y eliminarlo.<br>
Es como crearte un Trello tuyo que va a ir sigueindo las tareas de los pruyectos.<br>
Si completas el proyecto vas a tener un pop up que te avisa que ya lo terminaste.<br>
Cada usuario tiene su propia cuentas, van a tener distintas tareas, cada usuario crea su panel.<br>
Va a ser hecho con model view controler y la base de datos con MySQL, JavaScript y WebPack.

### devJobs

Plataforma de empleo para programadores, podes buscar una vacante y enviar tus datos.<br>
Se pueden publicar vacantes, para lo que se debe estar logueado, también se va a poder crear usuarios nuevos.<br>
Cada usuario va a tener su panel de administracion, va a poder actualizar datos, cargar imagenes (van a tener ciertos requisitos para poder subirlas).<br>
Se van a poder crear vacantes, con un formulario, vas a completar campos, tenes opciones desplegables, podes seleccionar los conocimientos. Podrás editar la publicación si la queres modificar y también eliminarla (esto siempore que seas reclutador). Debajo tenes contactar al reclutador, con su info, le puedes enviar email y un cv (PDF), vas a ver un cartel que te confirma que se envia el cv. En el panel de adminsitración se van a poder ver los candidatos (nombre, correo y con un boton se ve el cv).<br>
En la pantalla principal puedo buscar en base a algñun conocimiento, y filtro las vacantes que hay.<br>
Este proyecto tiene CRUD, se puede listar, actualizar y eliminar.<br>
Si se me olvida el password, me pide el correo para restablecer el password; me llega un correo y me lleva a restablecer la sesión (enlace temporal de 1 hora, si pasa el horario va a tener que pedirlo de nuevo, es una medida de seguridad, una buena practica).<br>
Utiliza model view controler.


#### Meeti

Es un clon de un sitio web, cuenta con: logotipo, menu de navegacion (con login) y buscador, luego categorias. <br>
Si no tiene una cuenta se puede registrar, se van a ver formularios para crear usuarios con validaciones, chequeamos si el email ya estaba registrado. <br>
Van a necesitar confirmar la cuenta con un correo que le vamos a enviar. <br>
Hay un panel de Administracion de meeti. Van a poder crear nuevos grupos, nuevos meeti, actualizar el perfil. <br>
Van a poder actualizar password, validandolo. <br>
Y pueden actualizar su imagen, van a estar validadas acorde a formatos y tamaños.<br>
Cada grupo va a tener muchos meeti, por lo que van a poder crear grupos. Los meeti se van a poder editar, eliminar. Se establece una fecha, un horario y con un mapa se localiza.<br>
El grupo lo va a poder modificar el que lo creo, tambien va a poder eliminarlo.<br>
Podes limitar la cantidad maxima de grupos, y crear una edicion premium con más grupos.<br>
Informacion del grupo, del usuario y del meeti es publico. Cuando ves un meeti te va a mostrar los meeti cercanos (se ordenan acorde a la localizacion, como las webs donde te muestran hoteles en el mapa).<br>
Los asistenetes de los Meeti se ven tanto en el front end (no logueado) como en el back end (logueado). Van a poder dejar comentarios en los meeti, el que crea el meeti va a poder eliminar los mensajes de todos, para evitar mensajes spam.<br>
Cada usuario va a tener su propio panel.<br>

### CRM - Administrador de clientes

Se puede dar de alta clientes, está hecho con REACT Hocks. Y está la parte del servidor, sería el BackEnd, hecho con NODE. Es una aplicación **Full Stack** y la base de datos es con MongoDB.<br>
Está la parte de loguin desde el front end que se comunica con el back. Del lado izquierdo ya logueado tenes la parte de adminsitración.<br>
La autenticacion se hace con JSON web token, se manda como request a Node.<br>

Tenemos los: <br>

**clientes :**<br>
Se pueden crear, edita y eliminar los clientes. Los formularios están validados. Se ve con la base de datos para autenticar y se ve como nuevo cliente. Todo se almacena en MongoDB. <br>

**productos :** <br>
Se pueden generar nuevos productos mediante un formulario, donde se completan datos y suben archivos. Hay cartel que confirma si se agrega correctamente. En la base de datos tenemos los productos, el archivo solo se almacena con su direccion, no el archivo, sino v a apesar mucho. Se puede editar un producto, cambiandole la imagen, el precio o el nombre. Son todos request autenticados con JSNO web token. <br>

**pedidos :** <br>
Puedo agregar un pedido filtrando por buscardor, puedo agregar más de uno al tener ya algo agregado. Puedo agregar más de un producto. Me suma todo y me da el totoal, como es un CRM, no es una tienda virtual solo es pedido, no hago el pago.<br>


