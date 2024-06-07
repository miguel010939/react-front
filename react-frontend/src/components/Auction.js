import axios from "axios";
import { useState, useEffect } from "react"
import { backend, token } from "../Consts";

export default function Auction({id}){
    const [amount, setAmount] = useState(0);

    const [message, setMessage] = useState("0");

    useEffect(() => {
        const headers = new Headers({
        'sessionid': token,
        });

    // Make an initial fetch request to establish a connection
    fetch(backend+"auctions/watch?product="+id, { headers })
      .then((response) => {
        if (response.ok) {
          const eventSource = new EventSource(response.url);

            //const eventSource = new EventSource(backend+"auctions/watch?product="+id);

            eventSource.onmessage = (event) => {
            setMessage(JSON.parse(event.data));
            };

            eventSource.onerror = (error) => {
                console.error('EventSource failed:', error);
                eventSource.close();
            };

            // Cleanup function
            return () => {
                eventSource.close();
            };
            } else {
            console.error('Failed to establish connection:', response.statusText);
            }
        })
        .catch((error) => {
            console.error('Fetch failed:', error);
        });
    }, []);


    const bid = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(backend + "bids?product="+id+"&amount="+amount,{},
                {
                    headers:{
                        "sessionid": token
                    }
                }
            );
        } catch(e){
            console.error(e);
        }
    }

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-4 items-baseline">
                <p>Precio a Batir: </p>
                <p className="text-3xl font-bold">{message}</p>
            </div>
            
            <form onSubmit={bid} className="flex flex-col gap-5 my-5 w-min">
                <input value={amount} onChange={(e)=>setAmount(e.target.value)}
                type="text"></input>
                <button type="submit" className="bg-red-500 text-white ">PUJA</button>
            </form>
        </div>
    )
}