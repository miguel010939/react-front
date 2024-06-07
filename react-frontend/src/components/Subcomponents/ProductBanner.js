export default function ProductBanner({imgSrc, name, description, showFavoriteButton = 1}){

    return(
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-teal-500">

            <img className="w-40 h-40" src={imgSrc}/>
            <div className="flex flex-col">
                <p>{name}</p>
                <p>{description}</p>
                <div className="flex flex-row">
                    {showFavoriteButton === 1 && <button onClick={()=>{}}>Marcar como favorito</button>}
                    {showFavoriteButton === -1 && <button onClick={()=>{}}>Quitar de favoritos</button>}
                </div>
            </div>
        </div>
    )
}