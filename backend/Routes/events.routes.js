const express = require("express")
const {protect,admin} = require("../Middleware/auth.middleware")
const { getAllEvents, getEnventById, createEvent, updateEvent, deleteEvent } = require("../Controllers/events.controller")


const router = express.Router()

router.get("/",getAllEvents)
router.get("/:id",getEnventById)

router.post("/",protect,admin,createEvent)
router.put("/:id",protect,admin,updateEvent)

router.delete("/:id",protect,admin,deleteEvent)

module.exports = router;