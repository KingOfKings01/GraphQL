import { prismaClient } from "../../lib/db"

const queries = {}

const mutations = {
    createUser: async (_: any, {email, firstName, lastName, password} : {email: string; firstName: string; lastName: string; password: string;}) => {
        const data = await prismaClient.user.create({
            data: {
                email,
                firstName,
                lastName,
                password,
                salt: "saltToTest"
            }
        })
        return data.id
    }
}

export const resolvers = { queries, mutations }