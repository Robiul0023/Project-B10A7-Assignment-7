import PropTypes from "prop-types";
 const Header = ({notice, handleSavings, savings}) => {

    return (
        <div className='w-full md'>
           {/*========= Start Navbar======== */}
            <div className="flex justify-between items-center my-4">
                <div className='w-16' >
                     <img className='w-30' src="/src/assets/logo.png" alt="" />
                </div>
                <div className='ml-5xl'>
               <ul className='flex gap-7 justify-between items-center'>
    
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
             
                <button  className='btn btn not-visited:flex items-center mx-3 rounded-lg border-1 border-b-gray-400 gap-3 p-1'>
                     {savings} Coins 
                   

                    <img className='w-4' src= "/src/assets/coin.jpg" alt="" />
                </button>
                </ul>
                </div>
            </div>
       {/*========= End Navbar======== */}

       {/*============ Banner Start========== */}
           
                <div className='image-container relative'>
                <img className='w-7xl h-dvh' src="/src/assets/banner.jpg" alt=""  />
               
                <button onClick={()=>{notice(), handleSavings()}} className="btn btn absolute top-130 left-1/2 rounded-xl text-black p-2 bg-yellow-300 font-bold">
                 Claim free credit
                 </button>
                 
                
                </div>
           
     <div className='flex justify-between my-6'>
            <h4 className=" font-bold">Available Players</h4>
            <div className="flex gap-2.5 text-right">
              <button className="btn border-t-cyan-100 hover:bg-amber-400 rounded-lg text-blue-500">Available</button>  
                <button className="btn border-t-cyan-100 hover:bg-amber-400 rounded-lg  text-blue-500">select</button>  
            </div>
            </div>
         </div>
         
    );

  


 };

 Header.propTypes={
    handleAddToPlayer: PropTypes.func 
 }
 
 export default Header;