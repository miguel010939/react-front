export default function SignUpForm(){


    return(
        <div className="flex flex-col">
            <h1 className="mb-10">Registro</h1>
            <form className="flex flex-col">
                <label>Nombre de usuario</label>
                <input type="text" required></input>

                <label>Email</label>
                <input type="email" required></input>
                
                <label>Contraseña</label>
                <input type="password" required></input>

                <div className="flex flex-row gap-5">
                    <button>¿Ya tienes cuenta?</button>
                    <button type="submit">Registrarse</button>
                </div>

            </form>
        </div>
    )
}