export default function UserCard({username}){
    return(
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-orange-300">

            <img alt="YYYY"></img>
            <p>{username}</p>
            <button>Productos</button>
        </div>
    )
}