import Reservation from "../models/Reservation.js"
import { StatusCodes } from "http-status-codes";
import BadReqError from "../errors/badREQerror.js";

const createReservation =async (req,res) => {


    const reservation = await Reservation.create(req.body);

    res.status(StatusCodes.CREATED).json({ reservation });
  
}


const getAllReservation = async (req, res) => {
    const reservation = await Reservation.find();
    const reversed_Reservations = reservation.reverse(); // Reverse the order of reservtaions
  console.log("reversed_Reservations")
    res.status(StatusCodes.OK).json({ reservation: reversed_Reservations });
  };


  export {
    createReservation,getAllReservation
  }

