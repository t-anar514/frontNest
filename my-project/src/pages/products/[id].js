import { useRouter } from 'next/router';
import { FaStar } from "react-icons/fa";
import { FaAngleDown,FaCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Image from 'next/image';

export default function ProductDetail(product) {
  const router = useRouter();
  const { id } = router.query;
  const { price } = router.query;
  const { shortDes } = router.query;
  const detailProduct = "https://grailedlocker.us/cdn/shop/files/FullSizeRender_7792e294-5b56-4bb0-b484-aa167aa16070.jpg?v=1696191538&width=900";
  // Fetch product details using the id
  // const product = ...

  return (
    <div className='w-screen  bg-white'>
      {/* <h1>Product Detail Page for Product ID: {id}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-4  gap-4">
        <div className="col-span-1">
          <Image 
            src="data:image/jpeg;base64,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"
            alt="Product Image"
            width={500}
            height={500}
            layout="responsive" />
        </div>
        <div className="col-span-1 md:pl-4 text-black" >
          <p className='text-sm mb-3'>Home / JUST DROPPED /</p>
          <h1 className="text-2xl font-bold md:mt-0">MIHARA SHOELACES (OFFWHITE)</h1>
          
          <p className="mt-8">12.5$</p>
          <p className='text-sm'>Shipping calculated at checkout.</p>
          <div className='flex items-center w-11/12 border-b-2 border-slate-300 gap-x-1 mt-4 pb-1'> 
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>(2,902)</p>
          </div>
          <p className="text-lg mt-4 text-slate-600 ">Size</p>
          <div className='flex items-center justify-center gap-x-2 border-2 border-slate-300 py-2  mt-2  w-32'>
            <p className=''>45" | 120 cm</p>
<FaAngleDown/>
          </div>
          <div className='flex items-center mt-4 gap-x-2'>
          <IoMdCheckmarkCircleOutline size={30}/>
<p>Read Product Information Below</p>
          </div>
          <div className='flex items-center mt-4 gap-x-4'>
          <FaCircle color='yellow' size={16}/>
<p>
Low stock - 7 items left</p>
          </div>
          <div className='flex w-full justify-start'>
          <button className="mt-4 border-2 border-black py-3 w-11/12  font-bold rounded ">
            Add to Cart
          </button></div>
          <div className='flex w-full justify-start'>
          <button className="mt-4 text-white py-3 w-11/12 rounded bg-blue-700 transition duration-300">
            Buy with ShopPay
          </button></div>
          <div className='w-11/12 mt-3 justify-center flex ' >
            <p className='hover:underline'>More payment options</p>
          </div>
          <p className='mt-4'>Pay in 4 interest-free installments for orders over <span className='font-bold'> $50.00</span> with  ShopPay <span className='underline'>Learn more</span> </p>
        </div>
      </div>
    </div>
  );
}
