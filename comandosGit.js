let iniciarGit = "git init";    //Crea un repositorio local de git

let indicarNombreUsuario = "git config user.name 'nombre de usuario de github'"; //mi caso nombre de usuario de github = federico-mouro (va entre comillas) 

let verificarNombreUsuario = "git config user.name";

let indicarMailUsuario = "git config user.email 'mail asociado en github'";  //mi caso mail asociado en github = federicomouro02@gmail.com (va entre comillas) 

let verificarMailUsuario = "git config user.email";

let vincularRepositorioGithub = "git remote add origin 'link'";  //mi caso el link es "https://github.com/federico-mouro/prueba.git"

let verificarReporsitorioGithub = "git remote -v";

let agregarArchivoGit = "git add 'nombre de archivo (incluyendo formato)'" //para incluir un unico archivo a git

let agregarArchivosGit = "git add ."    //agrega todos los archivos de la carpeta donde se inició git

let corroborarArchivoAniadidos = "git status"   //verifica los archivos subidos, si falta guarda algo en estos, y también menciona los archivos no subidos de la carpeta en la que se inició git

//En el control de código fuente hay dos secciónes: Cambios "staged" y Cambios.
//A la derecha del nombre del archivo hay una letra, esta hace referencencia a la inicial del estado del archivo en git. Siendo A: "added" (agregado), y M: "modified" (modificado)
//En la sección Cambios, los archivos siempre estarán con el estado M
//Para que pase de M a A hay que agregar el archivo a git usando el comando git add (nombre de archivo) o git add .

let guardarMomentoArchivo = "git commit -m 'texto'" //con este comando podremos hacer una "linea de tiempo" de nuestro archivo con referencias del momento de guardado

