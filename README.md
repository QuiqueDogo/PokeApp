# Instalacion

Para la instalacion es necesario `npm install` seguido de `npm start` para correr en el local

## Disponible Docker

Para ello, tenemos que tener Docker y ejecutamos  `docker build -t react-docker:1.0.1-dev .`.

Despues `docker run --rm --name web -p 3000:3000 react-docker:1.0.1-dev` para  poder visualizarlo

### Disponible en Netlify

Enlace https://pokeappdogo.netlify.app/
