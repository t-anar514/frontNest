import Products from "./Products";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive'

const products = [
    { id: 1, name: 'Product 1',price: 250,shortDes:"Mihara Shoelaces (White)", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 2, name: 'Product 2',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 3, name: 'Product 3',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 4, name: 'Product 4',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 5, name: 'Product 5',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 6, name: 'Product 6',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 7, name: 'Product 7',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 8, name: 'Product 8',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 9, name: 'Product 9',price: 250,shortDes:"Mihara Shoelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' }
    // Add more products as needed
];

const popProduct = [
    { id: 1, name: 'Product 1',price: 15,shortDes:"White X-RAY Link Necklace", imageUrl: 'https://grailedlocker.us/cdn/shop/files/PhotoRoom_009_20230731_191620.jpg?v=1690861125&width=540' },
    { id: 2, name: 'Product 2',price: 25,shortDes:"Grailed Beanie (Black)", imageUrl: 'https://grailedlocker.us/cdn/shop/files/PhotoRoom_004_20231001_111215.jpg?v=1696184688&width=540' },
    { id: 3, name: 'Product 3',price: 54,shortDes:"Grailed Beanie (Black)", imageUrl: 'https://grailedlocker.us/cdn/shop/files/PhotoRoom_001_20231001_111215.jpg?v=1696184766&width=540' },
    { id: 4, name: 'Product 4',price: 33,shortDes:"Grailed Beanie (Black)s", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 5, name: 'Product 5',price: 99,shortDes:"Grailed Beanie (Black)ces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 6, name: 'Product 6',price: 22,shortDes:"Grailed Beanie (Black)elaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 7, name: 'Product 7',price: 250,shortDes:"MiGrailed Beanie (Black)ces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 8, name: 'Product 8',price: 43,shortDes:"MiGrailed Beanie (Black)laces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 9, name: 'Product 9',price: 87,shortDes:"MihGrailed Beanie (Black)oelaces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' },
    { id: 10, name: 'Product 10',price: 19,shortDes:"MGrailed Beanie (Black)laces", imageUrl: 'https://grailedlocker.us/cdn/shop/files/FullSizeRender_cfb62ee9-e75d-479a-8da5-a5aef8eda13b.jpg?v=1696191497&width=720' }
    // Add more products as needed
];

export default function Homepage() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="w-full ">
            <div className="bg-black w-full  flex justify-center">
                <p className="text-base p-3">
                    <span className="font-bold">Free Shipping </span> Orders 35+
                </p>
            </div>
            <div className="w-full flex justify-center mt-36">
                <p className="text-3xl text-black">JUST DROPPED</p>
            </div>
            {/* <div className="flex overflow-x-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 pl-3">
        
                {products.map((product) => (
                    
                    <div key={product.id} className="flex-none w-1/2  ">
                        <Link href={`/products/${product.id}`} passHref>
                        
                                <Products product={product} />
                          
                        </Link>
                    </div>
                ))}
            </div> */}
                <div className={`flex pl-3  ${isTabletOrMobile ? ' overflow-x-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100' : 'grid grid-cols-5'} `}>
                {products.map((product) => (
                    <div key={product.id} className={`flex-none ${isTabletOrMobile ? 'w-1/2 mb-4' : 'w-full '}`}>
                        <Link href={`/products/${product.id}`} passHref>
                            <Products product={product} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-36">
                <p className="text-3xl text-black">Most Popular</p>
            </div>
            <div className={`flex pl-3  ${isTabletOrMobile ? ' overflow-x-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100' : 'grid grid-cols-5'} `}>
                {popProduct.map((product) => (
                    <div key={product.id} className={`flex-none ${isTabletOrMobile ? 'w-1/2 mb-4' : 'w-full '}`}>
                        <Link href={`/products/${product.id}`} passHref>
                            <Products product={product} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
