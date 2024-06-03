import ProductCard from "./ProductCard"
export default function ProductsGridView(){

    return(
        <div className="grid grid-cols-3 gap-4">
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    )
}