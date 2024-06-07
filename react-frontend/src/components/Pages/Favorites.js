import FavoritesFetcher from "../Fetchers/FavoritesFetcher";
import { token } from "../../Consts";
export default function Favorites(){

    return(
        <div>
            <h1>Tus Productos Favoritos</h1>

            <FavoritesFetcher token={token} limit={20} offset={0}></FavoritesFetcher>
        </div>
    )
}