import { Link } from "react-router-dom";
import { condotiero, backend, token } from "../../Consts";
import axios from "axios";
export default function UserBanner({id, username, showFollowButton = 1}){

    const foll = async () =>{
        try{
            await axios.post(
                backend+"followers/follow/"+id,{},
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
                    alert("Ese usuario no existe");
                    break;
                case 409:
                    alert("El usuario ya estaba entre tus seguidos")
                    break;
            } 
        }
    }
    const unfoll = async () =>{
        try{
            await axios.delete(
                backend+"followers/follow/"+id,
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
                    alert("El usuario no existe o no está entre tus seguidos");
                    break;
            } 
        }
    }

    return(
        <Link to={"/users/"+id+"/username/"+username}>
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-teal-500">

            <img className="w-40 h-40" src={condotiero} 
            alt="YYYY"></img>
            <div className="flex flex-col">
                <p>{username}</p>
                <p>Soy un condotiero de Rávena muy aficionado a los juegos de azar. Odio a muerte a los Capuletos. 
                    Tampoco me cae muy bien el Papa.
                </p>
                <div className="flex flex-row justify-end">
                    {showFollowButton === 1 && <button onClick={foll}>Seguir</button>}
                    {showFollowButton === -1 && <button onClick={unfoll}>Dejar de seguir</button>}
                </div>
            </div>
        </div>
        </Link>
    )
}