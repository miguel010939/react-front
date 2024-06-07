import axios from "axios"
import { backend, token } from "../../Consts"

export default function ProductBanner({id, imgSrc, name, description, showFavoriteButton = 1}){
   
    const fav = async () =>{
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
                case 404:
                    alert("El producto no existe");
                    break;
                case 409:
                    alert("El producto ya estaba entre tus favoritos")
                    break;
                case 401:
                    alert("Debes iniciar sesión");
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
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-teal-500">

            <img className="w-40 h-40" src={imgSrc}/>
            <div className="flex flex-col">
                <p>{name}</p>
                <p>{description}</p>
                <div className="flex flex-row">
                    {showFavoriteButton === 1 && <button onClick={fav}>Marcar como favorito</button>}
                    {showFavoriteButton === -1 && <button onClick={unfav}>Quitar de favoritos</button>}
                </div>
            </div>
        </div>
    )
}