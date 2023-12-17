import Reservation from "../models/Reservation.js"
import { StatusCodes } from "http-status-codes";
import BadReqError from "../errors/badREQerror.js";

const createReservation =async (req,res) => {


    const reservtaion = await Reservation.create(req.body);

    res.status(StatusCodes.CREATED).json({ reservation });
  
}