import express from "express";
import { getHomePage, getPage, createNewUser,editUser,deleteUser } from "../controller/homeController.js"


let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/:action/user/:id', getPage)
    router.post('/create', createNewUser)
    router.post('/edit', editUser)
    router.post('/delete', deleteUser)
    return app.use('/', router)
}

export default initWebRoute