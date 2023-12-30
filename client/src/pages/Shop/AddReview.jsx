import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import ReactStar from "react-rating-stars-component";
import axios from 'axios';
import { toast } from 'react-toastify';
export default function AddReview({id,newRev}) {

    const [{foodItem, cartShow, cartItems, user }, dispatch] = useStateValue();
    let [formData, setFormData] = useState({
        item_id: id,
        user_id: user?._id || user?.id || "",
        user_name: user?.name || "",
        user_pic: user?.image || "https://i.ibb.co/gTnHqRV/pngegg.png",
        rating: 0,
        review: "",
        date: 0,
      });

      useEffect(() => {
        if(id){
            setFormData((prev) => ({
                ...prev,
                item_id:id
            }))
        }
      }, [id])
      

      const { review, rating, user_id, item_id } = formData;
console.log(formData)
console.log(id)
      async function onSubmitReview(e) {
        e.preventDefault();
    
        // Ensure all required fields are provided
        if (!item_id || !user_id || !rating || !review) {
          toast.error("Please fill all the fields");
          return;
        }
    
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_LINK}/products/createreview`,
            formData
          );
          console.log(response.singleData);
          toast.success("Create a review successfully.");
          newRev()
        } catch (error) {
          console.error(error);
          toast.error("Failed to create a review. Please try again.");
        }
      }

      const ratingChanged = (newRating) => {
        setFormData((prevState) => ({
          ...prevState,
          rating: newRating || 0,
          date: new Date().toISOString(),
        }));
      };

      function onChange(e) {
        console.log("holo ");
        setFormData((prevState) => ({
          ...prevState,
          review: e.target.value,
        }));
      }

  return (
    <div
        className={`${
          user ? "flex" : "hidden"
        } flex-col gap-1 p-5 bg-red-00 h-auto `}
      >
        <p className="font-bold text-lg text-gray-800">Leave a Review</p>
        <ReactStar size={25} onChange={ratingChanged} />
        <form className="flex flex-col gap-2" onSubmit={onSubmitReview}>
          <div className="flex flex-col gap-5">
            <label className="font-semibold text-sm text-gray-600">Description</label>
            <textarea
              className="w-full h-14 border rounded-md text-sm text-gray-600"
              placeholder="Description"
              onChange={onChange}
            ></textarea>
          </div>

          <div className="flex flex-row gap-5">
            <button className="bg-blob-color4 text-sm rounded-md p-2 font-semibold hover:bg-gray-700 hover:text-blob-color4 transition duration-200 ease-in-out text-gray-800">
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}
