import express from "express";
import { getAllUsers, APICreateNewUser,APIUpdateUser,APIDeleteUser } from "../controller/APIController.js";

let router = express.Router();

const initAPIRoute = (app) => { 
    router.get('/users', getAllUsers) // method get => read data
    router.post('/create-user', APICreateNewUser) // method post => create data
    router.put('/update-user', APIUpdateUser) // method post => update data
    router.delete('/delete-user/:id', APIDeleteUser) // method post => delete data

    return app.use('/api/v1/', router)
}

export default initAPIRoute