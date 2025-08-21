
 
 const Footer = () => {
    return (
        <div className='container mt-40 relative w-full items-center'>
           
         
            <div className="max-w-5xl pt-40  mx-auto px-12 py-20 subscriber rounded-2xl z-10 relative">
            <h2 className='text-2xl font-bold  text-center'>Subscribe to our Newsletter</h2>
            <p className='mb-3 text-center'>Get the latest updates and news right in your box</p>
            <div className="flex justify-center">
             <input type="text" placeholder="Enter your email" className="input" />
             <button className="btn btn-warning rounded-lg ml-2 text-black">Subscribe</button>
             </div>
            </div>
           
        <div className= "footer-bottom bg-black  footer mt-45   mx-auto">
         
            <div className="mb-5 mt-60 mx-auto">
            <img className="w-35 h-35  bg-black rounded-3xl px-xl" src="src/assets/logo-footer.png" alt="" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-3 justify-between p-5 pb-0 ">
                <div className="p-5 pb-0">
                    <h4 className="text-white my-2">About Us</h4>
                    <p className="text-color text-xs">We are a passionate team </p>
                         <p className="text-color text-xs">dedicated to providing the 
                            best </p>
                        <p className="text-color text-xs">services
                         to our customers.</p>
                </div>
                 <div className="p-5">
                    <h4 className="text-white my-2">Quick Links</h4>
                    <ul className="text-color text-xs">
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                 <div className="p-5">
                    <h4 className="text-white my-2">Subscribe</h4>
                    <p className="text-color text-xs">Subscribe to our newsletter</p>
                    <p className="text-color text-xs"> for the latest updates.</p>
                    <input  type="text" placeholder="Enter your email" className="input bg-white w-50 my-3 outline-0" />
                    <button className="btn btn-neutral subscribe-btn text-black">Subscribe</button>
                </div>

            </div>
          
          
          <hr className="border-t border-gray-300 opacity-8 w-full my-10" />

            <div className="px-5  pb-9 text-center mx-auto">
                <p>&copy;2025 Silicon Software All Rights Reserved.</p>
            </div>
            </div>
           </div>
        
    );
 };
 
 export default Footer;