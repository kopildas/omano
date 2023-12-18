import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { useParams } from 'react-router';

export default function SingleItem() {
    const [{foodItem, cartShow, cartItems, user }, dispatch] = useStateValue();
    const [displayImage, setDisplayIamge] = useState(null);
    const { id } = useParams();
    const [singleData, setSingleData] = useState(null);
    useEffect(() => {
        if(foodItem)
        {
            const foundItem = foodItem.find((item) => item.id === id);
        //   selectedFoodRef.current = foundItem;
        console.log(foodItem)
        console.log(foundItem);
        setDisplayIamge(foundItem.images)
        setSingleData(foundItem);
        }
      }, [foodItem]);
  
  
    return (
    <div className='flex w-full'>
      <div className='w-1/3 h-screen bg-slate-00 flex items-start justify-start pl-10'>
        <img src={singleData?.images} alt="" className='mt-20 rounded-xl' />
      </div>
      <div className='w-1/3 h-screen bg-slate-00 flex flex-col hero-font-2 pl-5 pr-5'>
        <p className='hero-font-2 text-5xl font-bold text-stone-800 mt-20 '>{singleData?.item_name}</p>
        <p className='text-stone-800 text-xl'>Category : {singleData?.category}</p>
        <p className='text-stone-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid architecto voluptate ad aliquam laboriosam debitis ratione, dolorem ut deserunt at magni</p>
        <p className='text-stone-600 text-3xl mt-5'>Total Price</p>
        <p className='text-stone-700 text-5xl font-semibold'>{singleData?.price} $</p>
        <button className='bg-blob-color4 w-44 p-3 text-xl text-stone-800 mt-10 rounded-2xl'>Add to the cart</button>
      </div>
      <div className='w-1/3 h-screen bg-slate-00 flex justify-center'>
        <div className='w-96 h-96 rounded-lg bg-slate-200 mt-20 flex flex-col hero-font-2'>
            <div className='flex items-start justify-between p-5'>
                <p className='text-sm text-stone-400'>Information</p>
                <p className=' text-stone-600'>Overview</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}
