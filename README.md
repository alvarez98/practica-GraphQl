# GraphQl
## Teoría

- Resolvers
 
Son las funciones a ejecutar dependiendo del query o mutation al que se haga la peticion
Estos resolvers reciben 4 parametros:

- parent
- args
- ctx
- info

**Parent** 

El objeto que contiene el resultado devuelto por el solucionador en el campo primario.
Por ejemplo: el campo name de un autor necesita del parent para relacionar el campo author con los datos del mismo autor (post)
```
posts {
    id
    author {
      name
    }
  }
```

```js
author(parent, args, ctx, info) {
    return ctx.db.users.find(user => {
      return user.id === parent.author;
    })
  }
```
**Args**

Un objeto con los con las querys pasadas en la consulta.

**Ctx**

Este es un objeto compartido por todos los resolvers en una consulta particular.
Por buenas practicas en ctx.bd se almacena la base de datos para que todos los resolvers tengan acceso a ella

**Info**

Contiene información sobre el estado de ejecución de la consulta, incluido el nombre del campo, la ruta al campo desde la raíz.

## Modo de uso

Para probar la ruta con las diferentes querys o mutations posibles a traves del navegador, se ingresa al localhost del puerto 4000.

### Probando Querys

- Manera simple

```graphql
query {
  posts {
    id
    author {
      name
    }
  }
}
```

- Usando funciones y framentos

```graphql
query getPosts {
    posts {
        ...getposts
    }
}

fragment getposts on Post {
    id
    author {
        name
    }
    title
}
```

### Probando mutations

```
mutation {
  createUser( data: {
    name: "Adolfo",
    email: "example@gmail.com",
    age: 23
  }){
    id
    name
  }
}
```