const CreateCard = (props) => {
  return (
    <section className={`create ${props.collapsable3}`}>
      <button className="create__btn js-createBtn" name="create">
        <i className="far fa-address-card create__address"></i>crear tarjeta
      </button>

      <div className="created hidden">
        <h3 className="created__title">La tarjeta ha sido creada:</h3>
        {/* <a rel="noreferrer" href="" target="_blank" className="created__url js-url"></a> */}
        <button className="created__btn twitter--button">
          <a
            rel="noreferrer"
            href="/#"
            className="created__btn--text twitter--link"
          >
            <i className="fab fa-twitter created__btn--icon"></i>
            Compartir en Twitter
          </a>
        </button>
      </div>
    </section>
  );
};

export default CreateCard;

////////en proceso, no borrar para back ///////////////

// import { useState } from "react";


// function Share(props) {
// //  const [pepino, setPepino] = useState('');
 
//   const handleCreateCard = (data) => {

//     fetch('https://awesome-profile-cards.herokuapp.com/card', {
//           method: 'POST',
//           body: JSON.stringify(data),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//           .then((response) => response.json())
//           .then((data) => {
             
//             console.log(data);
            
         

//         // const resultData = data.pepino;
//         // if (pepino === '') {
          
//         // } else {
//         //   setStatus('Me ha dado ok');
//         //   setURL(result);
//         //   console.log(result);
//         // }
//       });
//     };
  

//   return (
//     <section className={`create ${props.collapsable3}`}>
//       <button className="create__btn js-createBtn" name="create">
//         <i className="far fa-address-card create__address" onClick={handleCreateCard}></i>crear tarjeta
//       </button>

//       <div className="created ">
//         <h3 className="created__title">La tarjeta ha sido creada:</h3>
//         {/* <a rel="noreferrer" href="" target="_blank" className="created__url js-url"></a> */}
//         <button className="created__btn twitter--button">
//           <a
//             rel="noreferrer"
//             href="/#"
//             className="created__btn--text twitter--link"
//           >
//             <i className="fab fa-twitter created__btn--icon"></i>
//             Compartir en Twitter
//           </a>
//         </button>
//       </div>
//     </section>
//   );

//    }



// export default Share;



