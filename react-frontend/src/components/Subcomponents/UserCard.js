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
        <div className="flex flex-row w-fill
        bg-slate-400 hover:bg-slate-100 px-6 py-6 rounded-lg hover:border-2 hover:border-black hover:p-5">
            <div className="mr-32">
                <img className="w-36 h-36" src={condotiero} 
                alt="YYYY"></img>
                <p className="text-center mt-4 font-semibold italic">{username}</p>
            </div>
            
            <div className="flex flex-col mr-24 justify-evenly">
                <button className=" text-white font-bold bg-black p-2 rounded-xl" onClick={unfoll}>Dejar de seguir</button>
                <Link className=" text-white font-bold bg-black p-2 rounded-xl" to={"/users/"+id+"/username/"+username}>Productos</Link>
            </div>
            
        </div>
    )
}