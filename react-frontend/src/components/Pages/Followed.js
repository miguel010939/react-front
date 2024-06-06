import { backend, token } from "../../Consts";
import UserList from "../Subcomponents/UserList";
import Error from "./Error";
import Loading from "./Loading";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Followed() {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get(backend + 'followers/follow', {
        headers: {
            "sessionid":token
        }
    })
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
    }, []);

    if (loading) return <Loading/>;
    if (error) return <Error/>;
    
    return(
        <div>
            <h1>Usuarios a los que sigues</h1>

            <UserList data={data} />
        </div>
    )
}