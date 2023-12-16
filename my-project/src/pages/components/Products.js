import React from "react";

// const data ()=>{
//     return(

//     );
// }

export default function Products(){
    return(
        <div className="flex gap-x-4 ">
            {   
                ["malgai1","malgai2","malgai3"].map((sav,index)=>(
                    <div className="w-24 h-24 bg-black" key={index}>
<p>{sav}</p>
                    </div>
                )            )}
        </div>
    );
}