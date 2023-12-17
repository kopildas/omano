import express from 'express'
const router = express.Router()

import {createReservation,getAllReservation} from "../controllers/reservationController.js";

router.route('/').post(createReservation).get(getAllReservation)