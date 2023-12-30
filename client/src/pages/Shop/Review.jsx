import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactStar from "react-rating-stars-component";
import { toast } from "react-toastify";


export default function Review({ item_id,newReview }) {
  const [reviews, setReviews] = useState(null);
console.log(item_id)
  async function fetch_review () {
    try {
        const response = await axios.get(
          `${import.meta.env.VITE_LINK}/products/createreview/${item_id}`
        );
        console.log(response);
        const fetchedReviews = response.data.reviews;
        setReviews(fetchedReviews);
       
      } catch (err) {
        const responseText = err.response.data;
  
        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
}


  useEffect(() => {

    fetch_review()

  }, [item_id,newReview]);
  

console.log(reviews);


  return (
    <div>
      <div>
        {reviews.length>0 ?
          reviews.map((item) => (
            <div key={item._id} className="gap-2 p-2 w-full bg-red-00" >
              <div className="flex flex-row gap-2 bg-gray-20 px-2 py-1">
                <div className="h-8 w-8 flex-shrink-0">
                  <img className="h-6 w-6 rounded-full" src={item.user_pic || `../../../public/images/avtar.jpg`} alt=""/>
                </div>
                <div className="text-sm w-full bg-orange-00">
              <div className="flex items-start justify-between w-full">
              <p className="font font-semibold text-gray-800">{item.user_name || `User`}</p>
              <ReactStar size={15} value={item.rating}  />
              </div>
              <p className="text-gray-600">{item.review}</p>
                </div>
              </div>
              
            </div>
          )) : (
            <div className="flex flex-col mt-10 text-gray-400 items-center justify-center ">
                <p>No review yet,</p>
                <p>Please leave a review</p>
                <p>become the first.</p>
            </div>
          )}
      </div>
    </div>
  );
}