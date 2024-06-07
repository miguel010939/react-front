import { Link } from "react-router-dom"
import axios from "axios";
import { backend, token } from "../../Consts";
export default function ProductCard({id, imgSrc, name, description, userId, showFavoriteButton = 1}){
    const linkToProduct = "/products/" + id

    const fav = async (e) =>{
        e.stopPropagation();
        try{
            await axios.post(
                backend+"favorites/"+id,{},
                {
                    headers:{
                        "sessionid": token
                    }
                }
            );
        } catch(e){
            console.error(e);
            switch(e.response.status){
                case 401:
                    alert("Debes iniciar sesión");
                    break;
                case 404:
                    alert("El producto no existe");
                    break;
                case 409:
                    alert("El producto ya estaba entre tus favoritos")
                    break;
            } 
        }
    }
    const unfav = async () =>{
        try{
            await axios.delete(
                backend+"favorites/"+id,
                {
                    headers:{
                        "sessionid": token
                    }
                }
            );
        } catch(e){
            console.error(e);
            switch(e.response.status){
                case 401:
                    alert("Debes iniciar sesión");
                    break;
                case 404:
                    alert("El producto no existe o no está entre tus favoritos");
                    break;
            } 
        }
    }

    return(
        <Link to={linkToProduct}>
        <div className=" bg-slate-700">
            <img src={imgSrc} alt="XXXX" 
            className="w-52 h-52"/>
            <p>{name}</p>
            <p>{description}</p>
            <p>{imgSrc}</p>
            <p>{userId}</p>
            <div className="flex flex-row">
                {showFavoriteButton === 1 && <button onClick={fav}>Marcar como favorito</button>}
                {showFavoriteButton === -1 && <button onClick={unfav}>Quitar de favoritos</button>}
            </div>
        </div>
        </Link>
    )
}