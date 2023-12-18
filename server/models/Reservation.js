import mongoose from "mongoose";
import validator from "validator";

const ReservationSchema = new mongoose.Schema({
    date: {
        type: String,
        required: [true, 'Please provide a date'],
      },
      table: {
        type: String,
        required: [true, 'Please provide a table'],
      },
      tableName: {
        type: String,
        required: [true, 'Please provide a table name'],
      },
      guest : {
        type: Number,
        default: 1,
      },
      time: {
        type: String,
        required: [true, 'Please provide a time'],
      },
      userid: {
        type: String,
        required: [true, 'Please provide a userid'],
      },
      user_name: {
        type: String,
        required: [true, 'Please provide a user'],
      },
      userEmail: {
        type: String,
        required: [true, 'Please provide a user email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide a valid user email',
        },
      },
});


export default mongoose.model('Reservation', ReservationSchema);