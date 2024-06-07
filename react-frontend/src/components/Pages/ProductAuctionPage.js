import { useParams } from "react-router-dom";
import Auction from "../Auction";
import { backend } from "../../Consts";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductBanner from "../Subcomponents/ProductBanner";

export default function ProductAuctionPage(){
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(backend + 'products/' + id)
            .then((response) => {
            setProduct(response.data)
            })
            .catch((error) => {
                console.error(error)
            });
        }, []);

    return(
        <div className="flex flex-col gap-6">
            <Auction id={id}></Auction>
            <ProductBanner id={id} imgSrc={product.imageUrl} name={product.name} description={product.description}
            showFavoriteButton={0}></ProductBanner>
            
        </div>
    )
}