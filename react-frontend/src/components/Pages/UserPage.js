import { useParams } from "react-router-dom"
import ProductFetcher from "../Fetchers/ProductFetcher"
import UserBanner from "../Subcomponents/UserBanner"
export default function UserPage(){
    const {id} = useParams();
    const {username} = useParams();

    return(
        <div className="flex flex-col">
        <UserBanner id={id} username={username}></UserBanner>
        <h1>Algunos de sus productos</h1>
        <ProductFetcher userId={id} limit={3}></ProductFetcher>
        </div>
    )

}