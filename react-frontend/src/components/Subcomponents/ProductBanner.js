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
        <div className="flex flex-row gap-4 p-6 rounded-xl 
        hover:border-2 hover:p-5 hover:bg-slate-100 bg-teal-100 hover:border-green-700">

            <img className="w-40 h-40" src={imgSrc}/>
            <div className="flex flex-col gap-3">
                <p>{name}</p>
                <p>{description}</p>
                <div className="flex flex-row justify-end mt-8">
                    {showFavoriteButton === 1 && <button className="text-white font-bold bg-black p-2" onClick={fav}>Marcar como favorito</button>}
                    {showFavoriteButton === -1 && <button className="text-white font-bold bg-black p-2" onClick={unfav}>Quitar de favoritos</button>}
                </div>
            </div>
        </div>
    )
}