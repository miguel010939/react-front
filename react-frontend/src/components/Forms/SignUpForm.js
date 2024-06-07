import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { backend } from "../../Consts";
export default function SignUpForm(){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(
                backend + "users/new",
                {"username": username, "email": email, "password": password}
            );
            const token = response.headers["sessionid"];
            console.log(token);
            navigate("/products"); // new user is driven to /products, so he/she buys sthing
        } catch(err){
            console.error(err);
        }
    }

    return(
        <div className="flex flex-col">
            <h1 className="mb-10">Registro</h1>
            <form onSubmit={signup} className="flex flex-col">
                <label>Nombre de usuario</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)}
                type="text" required></input>

                <label>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                type="email" required></input>
                
                <label>Contraseña</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                type="password" required></input>

                <div className="flex flex-row gap-5">
                    <Link to={"/login"}>¿Ya tienes cuenta?</Link>
                    <button type="submit">Registrarse</button>
                </div>

            </form>
        </div>
    )
}