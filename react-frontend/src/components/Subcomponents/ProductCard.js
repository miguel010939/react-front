
export default function ProductCard({imgSrc, name, description, userId}){

    return(
        <div className="h-40 w-40 bg-slate-700">
       <img src={"https://en.opensuse.org/images/f/f2/Button-laptop-colour.png"} alt="XXXX" className=""></img> 
        <p>{name}</p>
        <p>{description}</p>
        <p>{imgSrc}</p>
        <p>{userId}</p>
        </div>
    )
}