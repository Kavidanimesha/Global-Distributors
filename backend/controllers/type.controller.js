import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Get All API
export const getAllType = async (req,res) => {
    const types = await prisma.type.findMany()

    return res.json(types)
}

//Get By ID API
export const getTypeById = async (req,res) => {
    try {
        const type = await prisma.type.findUnique({
            where: {
                id: +req.params.id
            }
        })

        return res.json(type)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}


//Post API
export const createType = async (req,res) => {
    const type = req.body
    
    try {
        const createdType = await prisma.type.create({
            data: {
                type: type.type,
                description: type.description,
                category: type.category,
                user: {
                    connect: {
                        id:1
                    }
                }
            }
        })

        return res.send(createdType)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}


//Update API
export const updateTypeById = async (req,res) => {
    const type = req.body

    try {
        const updatedType = await prisma.type.update({
            where: {
                id: +req.params.id
            },
            data: {
                ...type
            }
        })

        return res.send(updatedType)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}

//Delete API
export const deleteType = async (req,res) => {
    const type = await prisma.type.delete({
        where: {
            id: +req.params.id
        }
    })

    return res.json(type)
}