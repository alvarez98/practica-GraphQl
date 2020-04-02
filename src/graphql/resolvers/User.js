const User = {
    posts(parent, args, ctx, info) {
        return ctx.db.posts.filter(post => {
            return post.id === parent.posts // parent (posicion actual)
        })
    }
}

export { User as default }