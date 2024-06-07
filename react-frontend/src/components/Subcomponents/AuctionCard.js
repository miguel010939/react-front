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
        <div className=" bg-slate-700">
            <img src={product.imageUrl} alt="XXXX" 
            className="w-52 h-52"/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.userId}</p>
            <Link to={"/auctions/product/"+productId}
            className="bg-red-800 text-white font-bold">SUBASTA</Link>

        </div>
    )

}