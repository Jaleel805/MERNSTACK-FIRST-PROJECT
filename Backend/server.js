require("dotenv").config()
const workoutRoutes = require("./routes/workouts")
const mongoose = require("mongoose")

const express = require("express")

// express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts', workoutRoutes)

// connect with mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening to port 4000", process.env.PORT);

        })
    })
    .catch(() => {
        console.log(error)
    })

