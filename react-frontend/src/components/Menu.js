import axios from "axios"
import ButtonMenu from "./Subcomponents/ButtonMenu" 
import { backend } from "../Consts"
import { useNavigate } from "react-router-dom"
import { token } from "../Consts"

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
            <ButtonMenu title={"Favoritos"} path={"/favorites"}></ButtonMenu>
            <ButtonMenu title={"Vendedores"} path={"/sellers"}></ButtonMenu>
            <ButtonMenu title={"Mis Productos"} path={"/myproducts"}></ButtonMenu>
            <ButtonMenu title={"Acceso"} path={"/login"}></ButtonMenu>
            <ButtonMenu title={"Registro"} path={"/signup"}></ButtonMenu>
            <button className="text-lg hover:underline "
            onClick={logout}>Cerrar sesión</button>

        </div>
    )
}
 