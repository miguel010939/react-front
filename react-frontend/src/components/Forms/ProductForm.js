export default function SignUpForm(){


    return(
        <div className="flex flex-col">
            <h1 className="mb-10">Nuevo Producto</h1>
            <form className="flex flex-col">
                <label>Nombre del producto</label>
                <input type="text" required></input>

                <label>Descripción</label>
                <input type="textarea" required></input>
                
                <label>Image URL</label>
                <input type="text" required></input>

                <div className="flex flex-row gap-5">
                    <button>Volver al Inicio</button>
                    <button type="submit">Añadir</button>
                </div>

            </form>
        </div>
    )
}