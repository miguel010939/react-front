import Error from "../ErrorsAndLoading/Error";
import Loading from "../ErrorsAndLoading/Loading";
import { backend } from "../../Consts";
import axios from "axios";
import { useEffect, useState } from "react";
import NoAuctionsError from "../ErrorsAndLoading/NoAuctionsError";
import ProductsGridView from "../Subcomponents/ProductsGridView";
import AuctionCard from "../Subcomponents/AuctionCard";
export default function AuctionsPage(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get(backend + 'auctions')
      .then((response) => {
        setData(response.data["products"]);
        setLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
    }, []);

    if (loading) return <Loading/>;
    if (error) return <Error/>;
    if (data == null) return <NoAuctionsError/>
    // I know this is doing N+1 requests and is terribly inefficient, but im short on time
    return(

        <ProductsGridView>
            {data.map((id)=><AuctionCard productId={id}></AuctionCard>)}
        </ProductsGridView>

    )


}