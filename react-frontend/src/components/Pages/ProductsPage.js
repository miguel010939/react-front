import { useState } from "react"
import ProductFetcher from "../Fetchers/ProductFetcher";
import { token } from "../../Consts";
import { Link } from "react-router-dom";

export default function ProductsPage({user}){ 
   const [limit, setLimit] = useState(20);
   const [offset, setOffset] = useState(0);


    return(
    <div className="flex flex-col">
        {user != null?<h1>Tus productos</h1>:<h1>Todos los productos</h1>}
        {user != null && <Link className="bg-green-300"
        to={"/products/new"}>Nuevo Producto</Link>}
        <div className="flex flex-row justify-between">
            <button onClick={()=>setOffset(offset-limit)}>Anterior</button>
            <button onClick={()=>setOffset(offset+limit)}>Siguiente</button>
        </div>


        <ProductFetcher userId={user} limit={limit} offset={offset} token={token}/>
    </div>)
}