import ButtonMenu from "./Subcomponents/ButtonMenu" 

export default function Menu(){

    return(
        <div className="flex flex-row justify-around h-auto bg-greenish-darkgrey px-5 py-7 w-full">
            <ButtonMenu title={"Inicio"} path={"/home"}></ButtonMenu>
            <ButtonMenu title={"Productos"} path={"/products"}></ButtonMenu>
            <ButtonMenu title={"Favoritos"} path={"/favorites"}></ButtonMenu>
            <ButtonMenu title={"Vendedores"} path={"/sellers"}></ButtonMenu>
            <ButtonMenu title={"Mis Productos"} path={"/myproducts"}></ButtonMenu>
            <ButtonMenu title={"Acceso"} path={"/login"}></ButtonMenu>
            <ButtonMenu title={"Registro"} path={"/signup"}></ButtonMenu>

        </div>
    )
}
 