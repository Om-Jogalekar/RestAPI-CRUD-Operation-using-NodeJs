const express = require('express');
const router = express.Router();
const userController = require("../controller/usercontroller");
const auth = require("../auth_middleware");


router.post("/register/" , userController.validateRegistration,userController.hashpassword,userController.registerUser);
router.post("/login" , userController.login);
router.get("/list", auth.checkAdmin,userController.userList);
router.get("/userdetails/:userid",auth.validateUserid,userController.userdetails);
router.put("/updateuser/:userid",auth.validateUserid,userController.hashpassword,userController.updateDetails);
router.delete("/deleteuser/:userid",userController.deleteUser);


module.exports = router;