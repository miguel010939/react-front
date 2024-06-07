import { backend, token } from "../../Consts";
import UserList from "../Subcomponents/UserList";
import Error from "../ErrorsAndLoading/Error";
import NoUsersError from "../ErrorsAndLoading/NoUsersError";
import Loading from "../ErrorsAndLoading/Loading";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Followed() {
    // TODO reload the page when user unfollows someone
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
    if (error){
      switch(error.response.status){
          case 401:
              alert("Debes iniciar sesión");
              break;
          case 404:
              return <NoUsersError/>
          default:
              return <Error/>
      }
  }
    
    return(
        <div>
            <h1>Usuarios a los que sigues</h1>

            <UserList data={data} />
        </div>
    )
}