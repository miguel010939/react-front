import { Children } from "react"
import ProductCard from "./ProductCard"
export default function ProductsGridView({children}){
    //console.log(productsData)
    
   /*  if (dataFetched){
        const grid = productsData.map((item)=><ProductCard imgSrc={item.imageUrl} name={item.name} 
        description={item.description} userId={item.userId}></ProductCard>);
    } else {
        const grid = null;
    }
 */
    /* const grid = () => {
        if (dataFetched){
            return productsData.map((item)=><ProductCard imgSrc={item.imageUrl} name={item.name} 
            description={item.description} userId={item.userId}></ProductCard>);
        } else {
            return null;
        }
    } */

    return(
        <div className="grid grid-cols-3 gap-4">
            {children}
        </div>
    )
}