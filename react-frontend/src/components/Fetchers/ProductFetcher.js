import ProductsGridView from "../Subcomponents/ProductsGridView";
import ProductCard from "../Subcomponents/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";
import { backend } from "../../Consts";
export default function ProductFetcher({userId, limit, offset}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO make custom query builder this is too ugly 
    const query = () => {
        if(userId != null && limit != null && offset != null){
            return "?user="+userId+"&limit="+limit+"&offset="+offset
        }      
        if(userId != null && limit != null && offset == null){
            return "?user="+userId+"&limit="+limit
        }  
        if(userId != null && limit == null && offset != null){
            return "?user="+userId+"&offset="+offset
        }  
        if(userId != null && limit == null && offset == null){
            return "?user="+userId
        }  
        if(userId == null && limit != null && offset != null){
            return "?limit="+limit+"&offset="+offset
        }      
        if(userId == null && limit != null && offset == null){
            return "?limit="+limit
        }  
        if(userId == null && limit == null && offset != null){
            return "?offset="+offset
        }  
        if(userId = null && limit == null && offset == null){
            return ""
        }  
        return "";
    }

    useEffect(() => {
    axios.get(backend + 'products' + query())
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
    }, [userId, limit, offset]);

    if (loading) return <Loading/>;
    if (error) return <Error/>;

    return(
        <div className="">
           <ProductsGridView >
            {data.map((item)=><ProductCard imgSrc={item.imageUrl} name={item.name} 
            description={item.description} userId={item.userId}></ProductCard>)}
            </ProductsGridView>
        </div>
    )
}