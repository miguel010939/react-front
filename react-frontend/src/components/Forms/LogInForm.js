import axios from "axios";
import { backend } from "../../Consts";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function LogInForm(){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(
                backend + "users/login",
                {"username": username, "password": password}
            );
            console.log(response.headers)
            navigate("/favorites"); // experienced user is driven to /favorites, so he/she buys sthing he/she likes
        } catch(err){
            console.error(err);
        }
    }

    return(
        <div className="flex flex-col bg-slate-400 my-10 px-10 py-5 rounded-xl">
            <h1 className="mb-10">Acceso</h1>
            <form onSubmit={login} className="flex flex-col">
                <label>Nombre de usuario</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)}
                type="text"></input>

                <label>Contraseña</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                type="password"></input>

                <div className="flex flex-row gap-5">
                    <Link to={"/signup"}>¿No tienes cuenta?</Link>
                    <button type="submit">Acceder</button>
                </div>

            </form>
        </div>
    )
}