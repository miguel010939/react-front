import { Link } from "react-router-dom";

export default function ButtonMenu({title, path}){

    return(
        <Link to={path} className="font-semibold hover:font-bold text-3xl text-white" 
        type="button">{title}</Link>
    )

}
