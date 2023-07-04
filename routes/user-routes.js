const express = require("express")
const UserController = require("../controller/user-controller")
const router = express.Router()

router.get("/all", UserController.getAllUsers)
router.post("/create", UserController.createUser)
router.get("/get/:uuid", UserController.readUser)
router.post("/update", UserController.updateUser)
router.post("/delete", UserController.deleteUser)

module.exports = router
