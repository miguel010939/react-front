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
        <div className="flex flex-row gap-4 p-6 rounded-xl 
        hover:border-2 hover:p-5 hover:bg-slate-100 bg-teal-100 hover:border-green-700">

            <img className="w-40 h-40 mr-10" src={condotiero} 
            alt="YYYY"></img>
            <div className="flex flex-col gap-3">
                <p>{username}</p>
                <p>Soy un condotiero de Rávena muy aficionado a los juegos de azar. Odio a muerte a los Capuletos. 
                    Tampoco me cae muy bien el Papa.
                </p>
                <div className="flex flex-row justify-end mt-8 mr-2">
                    {showFollowButton === 1 && <button className="text-white font-bold bg-black p-2" onClick={foll}>Seguir</button>}
                    {showFollowButton === -1 && <button className="text-white font-bold bg-black p-2" onClick={unfoll}>Dejar de seguir</button>}
                </div>
            </div>
        </div>
        </Link>
    )
}