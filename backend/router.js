import express from 'express'
import { getAllStaff, createStaff, deleteStaffById, updateStaffByID, getStaffById } from './controllers/staff.controller.js'
import { deleteShopById, updateShopById, createShop, getShopById, getAllShop } from './controllers/shop.controller.js'
import { deleteType, updateTypeById, createType, getTypeById, getAllType } from './controllers/type.controller.js'

const router = express.Router()

router.get('/staff', getAllStaff)
router.get('/staff/:id', getStaffById)
router.post('/staff', createStaff)
router.patch('/staff/:id', updateStaffByID)
router.delete('/staff/:id', deleteStaffById)

router.get('/shop', getAllShop)
router.get('/shop/:id', getShopById)
router.post('/shop', createShop)
router.patch('/shop/:id', updateShopById)
router.delete('/shop/:id', deleteShopById)

router.get('/type', getAllType)
router.get('/type/:id', getTypeById)
router.post('/type', createType)
router.patch('/type/:id', updateTypeById)
router.delete('/type/:id', deleteType)


export {router}