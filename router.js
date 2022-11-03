const apiRouter = require("express").Router()
const userController = require("./controllers/userController")
const listController = require("./controllers/listController")

const cors = require("cors")

apiRouter.use(cors())

apiRouter.get("/", (req, res) => res.json("Hello, if you see this message that means your backend is up and running successfully. Congrats! Now let's continue learning React!"))

// check token to log out front-end if expired
apiRouter.post("/checkToken", userController.checkToken)


apiRouter.post("/register", userController.apiRegister)
apiRouter.post("/login", userController.apiLogin)

apiRouter.post("/addToList",listController.apiAddtoList)
apiRouter.post("/updateList",listController.updateList)










module.exports = apiRouter
