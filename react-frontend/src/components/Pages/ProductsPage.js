import { useState } from "react"
import ProductFetcher from "../Fetchers/ProductFetcher";
import { token } from "../../Consts";
import { Link } from "react-router-dom";

export default function ProductsPage({user}){ 
   const [limit, setLimit] = useState(20);
   const [offset, setOffset] = useState(0);


    return(
    <div className="flex flex-col">
        <div className="flex flex-row items-baseline mt-10 mb-8">
            {user != null?<h1 className=" font-bold text-center text-3xl grow">Tus productos</h1>:
        <h1 className=" font-bold text-center text-3xl grow">Todos los productos</h1>}
        {user != null && <Link className="bg-green-700 font-bold text-white w-40 self-end shrink
         text-center px-3 py-3 rounded-3xl"
        to={"/products/new"}>Nuevo Producto</Link>}
        </div>
        
        <div className="flex flex-row justify-between">
            <button className="text-white font-semibold bg-blue-800 py-2 px-4 mb-6 -ml-5 text-xl rounded-full disabled:bg-blue-500 " 
                disabled={offset===0} onClick={()=>setOffset(offset-limit)}>Anterior</button>
            <button className="text-white font-semibold bg-blue-800 py-2 px-4 mb-6 -mr-5 text-xl rounded-full disabled:bg-blue-500 "
                onClick={()=>setOffset(offset+limit)}>Siguiente</button>
        </div>


        <ProductFetcher userId={user} limit={limit} offset={offset} token={token}/>
    </div>)
}