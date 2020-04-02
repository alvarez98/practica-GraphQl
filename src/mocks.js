const users = [
    {
        id: '1',
        name: 'Adolfo',
        email: 'aeap@gmail.com',
        posts: '87t873'
    },
    {
        id: '2',
        name: 'Esteban',
        email: 'adolfo@example.com',
        age: 21,
        posts: '87t2435'
    }
]

const posts = [
    {
        id: '87t873',
        title: 'Graphql',
        published: false,
        body: 'Lo que sea',
        author: '1'
    },
    {
        id: '87t2435',
        title: 'Graphql2',
        published: true,
        body: 'Ejemplo',
        author: '2'
    }
]
const db = {
    users,
    posts
}

export { db as default }