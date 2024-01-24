import express from 'express'
import { getAllStaff, createStaff, deleteStaffById, updateStaffByID, getStaffById } from './controllers/staff.controller.js'

const router = express.Router()

router.get('/staff', getAllStaff)
router.get('/staff/:id', getStaffById)
router.post('/staff', createStaff)
router.patch('/staff/:id', updateStaffByID)
router.delete('/staff/:id', deleteStaffById)







export {router}