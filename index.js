const express = require("express")
const cors = require("cors")
const { connectDB } = require("./db-connection")
require("dotenv").config()
const app = express()
connectDB()
app.use(cors())
app.use(express.json())

// const VideoRoutes = require("./routes/video-routes")
const AirbnbRoutes = require("./routes/airbnb-routes")
const UserRoutes = require("./routes/user-routes")

// app.use("/video", VideoRoutes)
app.use("/airbnb", AirbnbRoutes)
app.use("/user", UserRoutes)

// app.set("views", "template")
app.set("view engine", "pug")
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Application live on localhost:" + process.env.PORT)
})
