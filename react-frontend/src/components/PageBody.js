import ProductsGridView from "./ProductsGridView";

export default function PageBody(){
    return(
        <div>
            <h1>header 1</h1>
            <h2>header 2</h2>
            <div className="flex items-center justify-center">
            <ProductsGridView></ProductsGridView>
            </div>
        </div>
    )
}