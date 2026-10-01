const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const mongoose = require("mongoose")
const authRoutes = require("./Routes/auth.routes")
const eventRoutes = require("./Routes/events.routes")
const bookingRoutes = require("./Routes/bookings.routes")


const app = express()
app.use(cors())
app.use(express.json());

//Routes
app.use('/api/auth',authRoutes)
app.use('/api/events',eventRoutes)
app.use('/api/bookings',bookingRoutes)


// Connecting Mongodb
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connecting MongoDB Successfully");
    
}).catch((error)=>{
    console.log('Error Connecting to MongoDB ',error);
    
})
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on localhost:${PORT}`)  
    
})