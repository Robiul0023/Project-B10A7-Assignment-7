import { useEffect, useState } from "react";
import Player from "../Player/Player"

 const Players = ({notify}) => {
 const [Players, setPlayers] = useState([]);

        useEffect(() => {
            fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
        }, [])

 

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 p-3  my-6 relative"> 
        
           
           {
             Players.map((player, idx) => <Player key = {idx} player={player} notify={notify} ></Player>)
           }

          
        </div>
         
            
        
    );
   
 };


 
 export default Players;