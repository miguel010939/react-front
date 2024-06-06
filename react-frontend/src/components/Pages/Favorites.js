import FavoritesFetcher from "../Fetchers/FavoritesFetcher";

export default function Favorites(){

    return(
        <div>
            <h1>Tus Productos Favoritos</h1>

            <FavoritesFetcher token={"64e74791870e2fda58fddaac4df93328"} limit={20} offset={0}></FavoritesFetcher>
        </div>
    )
}