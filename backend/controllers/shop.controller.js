import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//Get All API
export const getAllShop = async (req,res) => {
    const shops = await prisma.shop.findMany()

    return res.json(shops)
}

//Get by Id API
export const getShopById = async (req,res) => {

    try {
        const shop = await prisma.shop.findUnique({
            where: {
                id: +req.params.id
            }
        })
    
        return res.json(shop)

    } catch (error) {
        return res.status(500).send({messsage:"API Failed", })
    }
}

//Post API
export const createShop = async (req,res) => {
    const shop = req.body

    try {
        const createdShop = await prisma.shop.create({
            data: {
                shop_name: shop.shop_name,
                owner_name: shop.owner_name,
                address: shop.address,
                contact_primary: +shop.contact_primary,
                contact_secondary: +shop.contact_secondary,
                user: {
                    connect: {
                        id: 1
                    }
                }
            }
        })

        return res.send(createdShop)

    } catch (e) {
        console.log(e);
        return res.status(500).send({messsage:"Something Went Wrong", })
    }
}


//Update API
export const updateShopById = async (req,res) => {

    const shop = req.body

    try {
        const updatedShop = await prisma.shop.update({
            where: {
                id: +req.params.id
            },
            data: {
                ...shop,
                contact_primary: +shop.contact_primary,
                contact_secondary: +shop.contact_secondary

            }
        })
    
        return res.send(updatedShop)

    } catch (e) {
        console.log(e);
        return res.status(500).send({messsage:"API Failed", })
    }
    
}

//Delete API
export const deleteShopById = async (req,res) => {

    const shop = await prisma.shop.delete({
        where: {
            id: +req.params.id
        }
    })

    return res.json(shop)
}