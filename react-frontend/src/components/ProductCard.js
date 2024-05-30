import '../logo.svg'
export default function ProductCard({imgSrc, name, description}){

    return(
        <div className="h-40 w-40 bg-slate-700">
       <img src={imgSrc} alt="XXXX" className=""></img> 
        <p>{name}</p>
        <p>{description}</p>
        </div>
    )
}