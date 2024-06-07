import { Link } from "react-router-dom";

export default function ButtonMenu({title, path}){

    return(
        <Link to={path} className="hover:font-bold text-2xl text-white" 
        type="button">{title}</Link>
    )

}
