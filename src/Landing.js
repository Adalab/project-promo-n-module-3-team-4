import React from "react";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import logo from "./images/logo-awesome-profile-cards.svg"
const Landing = () => {
    return (
        <>
        <main className="main-page">
     <div className="img-principal">
         <img className="logo-awesome-main" src={logo} alt=""/>
     </div>
     <h1 className="title-main">Crea tu tarjeta de visita</h1>
     <p className="subtitle-main">Crea mejores contactos profesionales de forma fácil y cómoda</p>
     
         <div className="options-main">
             <div className="options-kid">
                 <i className="far fa-object-ungroup dropdown__ungroup desing-icon"></i>
                 <h2 className="title-options">diseña</h2>
             </div>
             <div className="options-kid">
                 <i className="fill__dropdown--icon dropdown__ungroup fill-icon"></i> <i
                     className="far fa-keyboard dropdown__ungroup"></i>
                 <h2 className="title-options">rellena</h2>
             </div>
             <div className="options-kid op-share">
                 <i className="far fa-share-alt share-icon"></i>
                 <h2 className="title-options">comparte</h2>
             </div>
         </div>
 
         <Link to="/card">
         <a className="comenzar" href="./card.html">
             <button className="comenzar">
                 <h2 className="title-button">comenzar</h2>
             </button>
         </a>
         </Link>
 
 </main>
   <Footer />
   </>
    );
   
};
 export default Landing;

