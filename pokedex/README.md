<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar

```
yarn install
```

3. Disponer de nest cli instalado

```
npm i -g @nestjs/cli
```

4. Levantar la bd

```
docker-compose up -d
```

5. Resulta importante tener instalado docker en el equipo y que adicionalemnte este ejecutandose.

5.5 Ejecuta el comando para subir la aplicacion yarn start:dev

7. Clonar el archivo `.env.template` y renombrar la copia a `.env`

8. Lllenar las variables de entorno

9. Ejecutar el proyecto con el comando ` yarn start:dev`

10. Reconstruir la base de datos con la semilla

```
localhost:3000/api/v1/seed
```

## Stack usado

- MongoDb
- Nest
- Docker
