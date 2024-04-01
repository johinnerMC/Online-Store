
# Descripcion

## Correr en dev

1. Instalar dependencias
```bash
npm install
```

### Tener en el sistema instalado Docker
2. Crear una copia del ```.env.templete``` y renombrarlo a ```.env``` cambia las variables de entorno

3. Levantar la base de datos
> Esto levantara una base de datos PostgreSQL con las configuraciones previas que se encuentran en el archivo ```docker-compose.yml```
```bash
docker compose up -d
```

### Visualizar base de datos en local con TablePlus

4. Crea una nueva tabla visual, PostgreSQL
> Configura TablePlus con las variables del archivo ```.env```

* User: ```DB_USER```
* DataBase: ```DB_NAME```
* Password: ```DB_PASSWORD```

![Ejemplo de configuracion.](https://raw.githubusercontent.com/johinnerMC/cloud-images/master/guia/TablePlus.png "Configuracion.")

5. Configurar Prisma Client
> Ajusta ```DATABASE_URL``` con las variables de PostgreSQL

6. Ejecute una migración para crear las tablas
```bash
npx prisma migrate dev
```
> Visualize la tabla creada en TablePlus

7. Ejecutar seed
> Esto insertara datos de prueba. 
```bash
npm run seed
```

6. Correr el proyecto
```bash
npm run dev
```
 
## Correr en prod
