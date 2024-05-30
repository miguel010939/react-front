import UserCard from "./UserCard";

export default function UserList(){

    return(
        <div className="flex flex-col gap-5">
            <UserCard username="Manuel"></UserCard>
            <UserCard username="Manuel"></UserCard>
            <UserCard username="Manuel"></UserCard>
            <UserCard username="Manuel"></UserCard>       
        </div>
    )

}