import Auction from "./Auction";
import ProductCard from "./ProductCard";

export default function AuctionPage(){

    return(
        <div className="flex flex-row">
            <ProductCard></ProductCard>
            <Auction></Auction>
        </div>
    )
}