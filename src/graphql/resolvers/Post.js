const Post = {
  author(parent, args, ctx, info) {
    return ctx.db.users.find(user => {
      return user.id === parent.author;
    })
  }
}

export { Post as default }