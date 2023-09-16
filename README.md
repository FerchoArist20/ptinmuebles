# Inmuebles

## Instalación y ejecución en un entorno local
Se recomienda usar un dispositivo con sistema operativo Windows (preferiblemente la versión 10 u 11 para evitar problemas de compatibilidad) y un espacio de aproximadamente 1GB para alojar el proyecto.

### Requisitos
* Git ([descargar última versión](https://git-scm.com/downloads))
* NodeJS ([descargar última versión](https://nodejs.org/es))
*  NextJS ([descargar última versión](https://nextjs.org/))
* Node Package Manager (NPM) - incluido en la instalación de NodeJS
* PostgreSQL - Descargar el gestor de postgres de su preferencia
* Typescript - incluido en la instalacion de NextJS


### Pasos a seguir

1.Verificar que tengas instalados los requisitos necesarios mediante la consola de windows.

2. Clonar el repositorio a tu computador y verificar en que ruta queda descargado la carpeta con el proyecto.

3. acceder a la carpeta del proyecto llamado `ptinmuebles` desde tu editor de codigo de preferencia.

4. Instalar las dependencias necesarias para inicializar el proyecto, se realiza desde la consola ingresando el siguiente comando `npm install`.

5. Luego de instalar las dependencias y ver que todo esta correcto, inicializamos el proyecto, otra vez desde la consola ingresamos el siguiente comando `npm run dev` y te aparecera un mensaje satisfactorio de que el servidor está ejecutándose en `localhost:3000`.

 ### Ruta API
`http://localhost:3000/api/inmueblesdb/` Esta ruta te permitira realizar los llamados a la base de datos y realizar las validaciones `GET POST PUT DELETE` desde una app de prueba como por ejemplo postman.






   

