import UserCard from "./UserCard";

export default function UserList({data}){

    const users = data.map((item)=><UserCard id={item.id} username={item.username}></UserCard>);

    return(
        <div className="flex flex-col gap-5">
            {users}   
        </div>
    )

}