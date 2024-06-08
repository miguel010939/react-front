import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backend } from "../../Consts";
import axios from "axios";
export default function AuctionCard({productId}){
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(backend + 'products/' + productId)
            .then((response) => {
            setProduct(response.data)
            })
            .catch((error) => {
                console.error(error)
            });
        }, []);


    return(
        <div className="flex flex-col gap-4 bg-slate-400 hover:bg-slate-100 px-6 py-6 rounded-lg hover:border-2 hover:border-black hover:p-5">
            <img src={product.imageUrl} alt="XXXX" 
            className="w-52 h-52"/>
            <p className="font-bold text-xl">{product.name}</p>
            <p className="italic ms-3">{product.description}</p>
            <Link to={"/auctions/product/"+productId}
            className="bg-red-800 text-white text-xl font-bold px-4 py-3 w-40 rounded-full">SUBASTA</Link>

        </div>
    )

}