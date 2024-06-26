import { useParams } from "react-router-dom";
import { backend } from "../../Consts";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../ErrorsAndLoading/Loading";
import Error from "../ErrorsAndLoading/Error";
import ProductBanner from "../Subcomponents/ProductBanner";
import UserBanner from "../Subcomponents/UserBanner";
import ProductFetcher from "../Fetchers/ProductFetcher";
export default function SingleProductPage(){
    const {id} = useParams();

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get(backend + 'products/' + id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
    }, [id]);

    if (loading) return <Loading/>;
    if (error) return <Error/>;
// TODO use filter() to filter out the product of the current page
    return(
        <div className="flex flex-col">
            <ProductBanner imgSrc={product.imageUrl} 
            name={product.name} description={product.description}
            id={product.id}/>

            <UserBanner id={product.userId} username={"Giacomo"}/>

            <h1>Otros productos del mismo vendedor</h1>
            
            <ProductFetcher userId={product.userId} limit={3} />

        </div>
    )


}