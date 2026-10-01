const express = require("express")

const router = express.Router()
const{ protect ,admin} =require("../Middleware/auth.middleware")
const { bookEvent, getMyBookings, confirmBookings, cancelBooking, sendBookingOTP } = require("../Controllers/bookings.controller")




router.post("/",protect, bookEvent)
router.post("send-otp",protect,sendBookingOTP)
router.get("/my",protect, getMyBookings)
router.put("/:id/confirm",protect,admin,confirmBookings)
router.delete("/:id",protect,cancelBooking)


module.exports= router