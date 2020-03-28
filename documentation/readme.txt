1. Requisitos
    1.1. Git (https://git-scm.com/downloads)
    1.2. Docker (docker-compose) (https://docs.docker.com/docker-for-windows/install/)
    1.3. NodeJs (https://nodejs.org/es/)
    1.4. Npm (https://nodejs.org/es/)
2. Verificar versiones
    2.1. Git version 2.20.1
    2.2. Docker version 19.03.8
    2.3. NodeJs version 12.16.1
    2.4. Npm version 6.13.4
3. Instalar componentes
    3.1. Iniciar Docker
    3.2. MySQL & Adminer
        - Ubicarse en ~/travelers/environment
        - Correr el comando: docker-compose up -d
    3.3. Verificar conexión a la base de datos
        - Ingresar a: http://localhost:8080
        - Escribir credenciales y conectarse
    3.4. Instalar proyecto NodeJs
        - Ubicarse en ~/travelers/backend
        - Correr el comando: npm install
4. Listo!