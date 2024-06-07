import { Link } from "react-router-dom"
export default function ProductCard({id, imgSrc, name, description, userId, showFavoriteButton = 1}){
    const linkToProduct = "/products/" + id

    return(
        <Link to={linkToProduct}>
        <div className=" bg-slate-700">
            <img src={"https://en.opensuse.org/images/f/f2/Button-laptop-colour.png"} alt="XXXX" className=""></img> 
            <p>{name}</p>
            <p>{description}</p>
            <p>{imgSrc}</p>
            <p>{userId}</p>
            <div className="flex flex-row">
                {showFavoriteButton === 1 && <button onClick={()=>{}}>Marcar como favorito</button>}
                {showFavoriteButton === -1 && <button onClick={()=>{}}>Quitar de favoritos</button>}
            </div>
        </div>
        </Link>
    )
}