const express= require("express");
const router=express.Router();

const {loginController,registerController,fetchAllUsersController} = require("../Controllers/UserControllers");
const {dashboardController} = require("../Controllers/AdminControllers");
const protect = require("../middleware/AuthMiddleware")

router.post('/login',loginController)
router.get('/admin',dashboardController)
router.post('/register',registerController)
router.get('/fetchUsers',protect,fetchAllUsersController);

module.exports=router