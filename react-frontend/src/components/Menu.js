import ButtonMenu from "./ButtonMenu" 

export default function Menu(){

    return(
        <div className="flex flex-row justify-around h-auto bg-greenish-darkgrey px-5 py-7 w-full">
            <ButtonMenu title={"Inicio"}></ButtonMenu>
            <ButtonMenu title={"Productos"}></ButtonMenu>
            <ButtonMenu title={"Favoritos"}></ButtonMenu>
            <ButtonMenu title={"Vendedores"}></ButtonMenu>
            <ButtonMenu title={"Mis Productos"}></ButtonMenu>
            <ButtonMenu title={"Acceso"}></ButtonMenu>
            <ButtonMenu title={"Registro"}></ButtonMenu>

        </div>
    )
}
 