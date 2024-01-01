import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { useParams } from 'react-router';
import Add_To_Cart from '../../componennts/Home/Cart/Add_To_Cart';
import Review from './Review';
import AddReview from './AddReview';
import Related_Item from './Related_Item';





export default function SingleItem() {
    const [{foodItem, cartShow, cartItems, user }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);
    const [displayImage, setDisplayIamge] = useState(null);
    const { id } = useParams();
    const [singleData, setSingleData] = useState(null);
    useEffect(() => {
        if(foodItem)
        {
            const foundItem = foodItem.find((item) => item.id === id);
        //   selectedFoodRef.current = foundItem;
        setDisplayIamge(foundItem.images)
        setSingleData(foundItem);
        }
      }, [foodItem]);
  
      const [newReview, setNewReview] = useState(true);
      const newRev = ()=> {
        setNewReview(!newReview);
      }
    return (
    <div>
      <div className='flex flex-col md:flex-row w-full'>
      <div className='md:w-1/3 md:h-screen bg-slate-00 flex items-center justify-center md:pl-10'>
        <img src={singleData?.images} alt="" className='md:-mt-24 mt-10 rounded-xl h-96' />
      </div>
      <div className='md:w-1/3  md:h-screen bg-slate-00 flex flex-col hero-font-2 pl-5 pr-5'>
        <p className='hero-font-2 text-5xl font-bold text-stone-800 mt-20 '>{singleData?.item_name}</p>
        <p className='text-stone-800 text-xl'>Category : {singleData?.category}</p>
        <p className='text-stone-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid architecto voluptate ad aliquam laboriosam debitis ratione, dolorem ut deserunt at magni</p>
        <p className='text-stone-600 text-3xl mt-5'>Total Price</p>
        <p className='text-stone-700 text-5xl font-semibold'>{singleData?.price} $</p>
        <div className="flex gap-5 mt-10 items-center">
              <div className="flex gap-1">
                <button className="border border-gray-400 w-8 h-8 text-4xl flex items-center justify-center"
                onClick={() => setQuantity(quantity - 1)}>
                  -
                </button>
                <button disabled="disabled">{quantity}</button>
                <button className="border w-8 h-8 text-4xl flex items-center justify-center border-gray-400" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
              <div className="flex gap-1">
                <Add_To_Cart data={singleData} quantity={quantity} />
              </div>
            </div>
      </div>
      <div className='md:w-1/3 bg-red-00 h-auto bg-slate-00 flex justify-center'>
        <div className='w-96 h-auto rounded-lg bg-slate-10 backdrop-blur-sm mt-20 flex flex-col  justify-between hero-font-2 border'>
            <div className='flex items-start justify-between p-5'>
                <p className='text-lg text-stone-400'>Review</p>
                <p className='text-sm text-stone-600'>Overview</p>
            </div>
            <div className='bg-gray-100 rounded-md m-3 -mt-5 overflow-y-auto h-[12rem]'>
            <Review item_id={singleData?._id} newReview={newReview} />
            </div>
            <AddReview id={singleData?._id} newRev={newRev} newReview={newReview} />
        </div>
      </div>
    </div>
    <div className='w-full md:h-screen bg-red-00 flex flex-col items-center justify-center'>
      <p className='mt-40 bg-red-00 w-full px-20 text-4xl font-semibold text-gray-800'>Related Foods</p>
      <Related_Item category={singleData?.category} />
    </div>
    </div>
  )
}
