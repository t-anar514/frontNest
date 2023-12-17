import { useMediaQuery } from 'react-responsive'


export default function ProductCard({ product }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    return (
      <div className={`border ${isTabletOrMobile ? 'w-10/12' : 'w-full'}   rounded shadow hover:shadow-lg transition duration-300 mt-8 flex flex-col items-center `}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-full" />
        <div className="p-2">
          <h2 className="text-xl  text-black">{product.shortDes}</h2>
          <p className="text-black pt-2">{product.price}$</p>
        </div>
      </div>
    );
  }
  