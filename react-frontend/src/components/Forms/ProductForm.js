import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backend, token } from "../../Consts";

export default function ProductForm(){
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [url, setUrl] = useState();

    const submit = async (event) => {
        event.preventDefault();
        try{
            await axios.post(
                backend + "products/new",
                {"name": name, "description": description, "imageUrl": url},
                {
                    headers:{
                        "sessionid": token
                    }
                }
            );
            navigate("/myproducts");
        }catch(error) {
            console.error(error);
        }

    }

    return(
        <div className="flex flex-col bg-slate-400 my-10 px-10 py-5 rounded-xl">
            <h1 className="mb-10">Nuevo Producto</h1>
            <form onSubmit={submit} className="flex flex-col">
                <label>Nombre del producto</label>
                <input value={name} onChange={(e)=>setName(e.target.value)}
                type="text" required></input>

                <label>Descripción</label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}
                required></textarea>
                
                <label>Image URL</label>
                <input value={url} onChange={(e)=>setUrl(e.target.value)}
                type="text" required></input>

                <div className="flex flex-row gap-5">
                    <Link to={"/home"}>Volver al Inicio</Link>
                    <button type="submit">Añadir</button>
                </div>

            </form>
        </div>
    )
}