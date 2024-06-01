export default function LogInForm(){


    return(
        <div className="flex flex-col">
            <h1 className="mb-10">Acceso</h1>
            <form className="flex flex-col">
                <label>Nombre de usuario</label>
                <input type="text"></input>

                <label>Contraseña</label>
                <input type="password"></input>

                <div className="flex flex-row gap-5">
                    <button>¿No tienes cuenta?</button>
                    <button type="submit">Acceder</button>
                </div>

            </form>
        </div>
    )
}