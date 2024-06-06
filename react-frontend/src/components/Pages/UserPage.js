import ProductFetcher from "../Fetchers/ProductFetcher"
import UserBanner from "../Subcomponents/UserBanner"
export default function UserPage({userId, username}){

    return(
        <>
        <UserBanner id={userId} username={username}></UserBanner>
        <h1>Algunos de sus productos</h1>
        <ProductFetcher userId={userId} limit={4}></ProductFetcher>
        </>
    )

}