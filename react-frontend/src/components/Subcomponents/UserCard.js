import { Link } from "react-router-dom"
import axios from "axios";
import { condotiero, backend, token } from "../../Consts";
export default function UserCard({id, username}){
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
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-orange-300">

            <img className="w-36 h-36" src={condotiero} 
            alt="YYYY"></img>
            <p>{username}</p>
            <div className="flex flex-row">
                <button onClick={unfoll}>Dejar de seguir</button>
                <Link to={"/users/"+id+"/username/"+username}>Productos</Link>
            </div>
            
        </div>
    )
}