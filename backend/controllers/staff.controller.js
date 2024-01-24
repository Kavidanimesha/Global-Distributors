import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//Get All API
export const getAllStaff = async (req,res) => {
    const staff = await prisma.staff.findMany()

    return res.json(staff)
}

//Get bi Id API

export const getStaffById = async (req,res) => {
    try {
        const staff = await prisma.staff.findUnique({
            where: {
                id: +req.params.id
            }
        })

        return res.json(staff)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}

//Post API
export const createStaff = async (req,res) => {
    const staff = req.body
    
    try {
        const createdStaff = await prisma.staff.create({
            data: {
                address: staff.address,
                contact_primary: staff.contact_primary,
                contact_secondary: staff.contact_secondary,
                email: staff.email,
                first_name: staff.first_name,
                last_name: staff.last_name,
                user: {
                    connect: {
                        id:1
                    }
                }
            }
        })

        return res.send(createdStaff)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}

//Update API
export const updateStaffByID = async (req,res) => {
    const staff = req.body

    try {
        const updateStaff = await prisma.staff.update({
            where: {
                id: +req.params.id
            },
            data: {
                ...staff
            }
        })

        return res.send(updateStaff)
    } catch (e) {
        return res.status(500).send({messsage:"API Failed", })
    }
}

//Delete API
export const deleteStaffById = async (req,res) => {
    const staff = await prisma.staff.delete({
        where:{
            id: +req.params.id
        }
    })

    return res.json(staff)
}