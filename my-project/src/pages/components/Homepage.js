import Products from "./Products";

export default function Homepage(){
    return(
        <div className="w-full h-screen  bg-slate-200"> 
<div className="bg-black w-full mt-8 flex justify-center"> 
<p className="text-base p-3"> <span className="font-bold">Free Shipping </span> Orders 35+</p>
</div>
<div className="w-full flex justify-center mt-12">
<p className="text-3xl text-black">JUST DROPPED</p>
</div>
{/* //5say yen */}
<div className="w-full ">
    <Products/>
</div>
        </div>
    );
}