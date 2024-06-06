export default function UserBanner({id, username}){
    return(
        <div className="flex flex-row gap-4 hover:bg-red-500 bg-teal-500">

            <img src={"https://cdn.iconscout.com/icon/free/png-512/free-avatar-375-456327.png?f=webp&w=256"} 
            alt="YYYY"></img>
            <p>{username}</p>

        </div>
    )
}