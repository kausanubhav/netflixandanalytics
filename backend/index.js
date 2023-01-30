const express = require("express")
const app = express()
const port = 5000
const dotenv = require("dotenv")
const connectDb = require("./config/db")
const errorHandler = require("./middleware/errorMiddleware")
const cors = require("cors")
dotenv.config()
//Connect to db
connectDb()
app.use(cors())

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.json({ message: "Welcom to Netflix-Clone API" })
})

//Routes
app.use("/api/users", require("./routes/users"))
app.use("/api/movies", require("./routes/movies"))
app.use("/api/lists", require("./routes/lists"))

app.use(errorHandler)
app.listen(port, () => {
  console.log(`Backend running on ${port}`)
})
