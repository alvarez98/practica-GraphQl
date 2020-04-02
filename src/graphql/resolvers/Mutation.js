import uuid4 from "uuid/v4"

const Mutation = {
        createUser(parent, args, ctx, info) {
            const emailTaken = ctx.db.users.some(
              user => user.email === args.data.email
            );
            console.log(emailTaken);
            
            if(emailTaken) throw new Error('Email taken')
            
            const user = {
                id: uuid4(),
                ...args.data
            }
            ctx.db.users.push(user)
            return user
        }
    }

    export { Mutation as default }