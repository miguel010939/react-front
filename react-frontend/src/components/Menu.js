import axios from "axios"
import ButtonMenu from "./Subcomponents/ButtonMenu" 
import { backend } from "../Consts"
import { useNavigate } from "react-router-dom"
import { token } from "../Consts"
import { Link } from "react-router-dom"
export default function Menu(){
    const navigate = useNavigate();

    const logout = async ()=>{
        try{
            await axios.delete(
                backend + "users/logout",
                {
                    headers:{
                        "sessionid": token
                    }
                }
            );
            navigate("/home");
        } catch(e){
            console.error(e)
        }
    }

    return(
        <div className="flex flex-row justify-around h-auto bg-greenish-darkgrey px-5 py-7 w-full">
            <ButtonMenu title={"Inicio"} path={"/home"}></ButtonMenu>
            <ButtonMenu title={"Productos"} path={"/products"}></ButtonMenu>
            <ButtonMenu title={"Subastas"} path={"/auctions"}></ButtonMenu>
            <ButtonMenu title={"Favoritos"} path={"/favorites"}></ButtonMenu>
            <ButtonMenu title={"Vendedores"} path={"/sellers"}></ButtonMenu>
            <ButtonMenu title={"Mis Productos"} path={"/myproducts"}></ButtonMenu>
            <div className="flex flex-row text-white gap-6 -mr-4">
                <div className="flex flex-col gap-2 -mt-4 text-2xl">
                    <Link className="hover:font-bold" to={"/login"}>Acceso</Link>
                    <Link className="hover:font-bold" to={"/signup"}>Registro</Link>
                </div>
                <button className="text-lg hover:underline "
                onClick={logout}>Cerrar sesión</button>
            </div>
        
        </div>
    )
}
 