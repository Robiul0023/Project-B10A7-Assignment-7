
 import PropTypes from 'prop-types';

 const Player = ({player, notify}) => {
    const {playerId, image, name, country,  role, battingType, bowlingType, biddingPrice} = player;
    return (
     
      <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className='w-376 h-60  rounded-2xl' src= {image}
      alt="Shoes" />
  </figure>
  <div className="player-description mt-3 flex items-center gap-x-10">
    <div className='text-left space-y-3'>
    <h1>{playerId}</h1>
    <h2 className="player-title font-bold">{name}</h2>
    <p className='player-country'>{country}</p>
    <p className="player-role">{role}</p>
    <p className='batting-type'>{battingType}</p>
     <button className= 'btn btn-bg-gray-100 p-1 rounded-xl text-left from-neutral-100'>Price: {biddingPrice}</button>
    </div>
    <div className='space-y-5'>
    <p className='bowling-type mt-32'>{bowlingType}</p>
    <div className="card-actions justify-center mx-0">
      
      <button onClick={()=>notify(player.name)} className="btn btn-bg-gray-100 p-2 rounded-xl text-center">Choose Player</button>
    </div>
    </div>
  </div>
</div>

    );

   
 };

  Player.propTypes = {
      player:PropTypes.object.isRequired,
      notify:PropTypes.func, 
      
  }
 
 export default Player;