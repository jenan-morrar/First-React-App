import React, {useEffect} from "react";
import axios from "axios";


const Home = () =>{

    useEffect(() => {
        axios.get(process.env.PUBLIC_URL +'/APIs/Coustomers.json').then((getData) => {
            console.log(getData.data.coustomers);
        })
    }, [])
    
    return(
        <div>
            <h1>this is Home page </h1>
        </div>
    )
}

export default Home;