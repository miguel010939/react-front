export default function UserBanner({id, username, showFollowButton = 1}){

    return(
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-teal-500">

            <img className="w-40 h-40" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Antonello_da_Messina_059.jpg/800px-Antonello_da_Messina_059.jpg"} 
            alt="YYYY"></img>
            <div className="flex flex-col">
                <p>{username}</p>
                <p>Soy un condotiero de Rávena muy aficionado a los juegos de azar. Odio a muerte a los Capuletos. 
                    Tampoco me cae muy bien el Papa.
                </p>
                <div className="flex flex-row justify-end">
                    {showFollowButton === 1 && <button onClick={()=>{}}>Seguir</button>}
                    {showFollowButton === -1 && <button onClick={()=>{}}>Dejar de seguir</button>}
                </div>
            </div>
        </div>
    )
}