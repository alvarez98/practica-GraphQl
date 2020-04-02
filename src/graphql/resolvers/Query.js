const Query = {
    posts(parents, args, { db }, info) {
        if (!args.query) return db.posts
        return db.posts.filter((post) => {
            const titleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
            const bodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return titleMatch || bodyMatch
        })
    },
    greeting(parent, args, ctx, info) {
        const response = args.name ? `Hello ${args.name}` : 'Hello human'
        return response
    },
    me() {
        return {
            id: '12345',
            name: 'Adolfo Esteban',
            email: 'aeap@gmail.com',
            age: 21
        }
    },
    post() {
        return {
            id: '87t873',
            title: 'Graphql',
            published: false,
            body: 'Lo que sea'
        }
    },
    users(parent, args, ctx, info) {
        if (!args.query) return ctx.db.users
        return ctx.db.users.filter(user => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    }
}

export { Query as default }