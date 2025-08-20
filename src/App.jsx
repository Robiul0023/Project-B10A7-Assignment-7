import React, { useState } from "react";
import Header from './Components/Header/Header'
import './App.css'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
 import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

function App() {
 
   const notice = () => {
    toast("Credit Added to your Account");
  };

   const [ savings, setSavings] = useState(0);

   const handleSavings = () =>{
    const newBalance = savings + 6000000;
    setSavings(newBalance);

}

const notify = (playerName) => {

  if (savings > 0) {
      toast.success(`Congrats! ${playerName}  is now in your squad`);
    } else {
      toast.error("Not enought money to buy this player, claim some credit");
    }
  }; 


  return (
    <>
      
      <Header  notice = {notice}  handleSavings = {handleSavings} savings={savings}></Header>
      <Players notify={notify}></Players>
      <Footer></Footer>
      <ToastContainer position="top-center"></ToastContainer>
  
  </>

  )
}

export default App
