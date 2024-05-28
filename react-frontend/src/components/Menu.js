import ButtonMenu from "./ButtonMenu" 

export default function Menu(){

    return(
        <div className="flex flex-row justify-between h-10 bg-red-400 px-5">
            <ButtonMenu title={"Inicio"}></ButtonMenu>
            <ButtonMenu title={"Productos"}></ButtonMenu>
            <ButtonMenu title={"Favoritos"}></ButtonMenu>
            <ButtonMenu title={"Vendedores"}></ButtonMenu>
            <ButtonMenu title={"Login"}></ButtonMenu>

        </div>
    )
}
 