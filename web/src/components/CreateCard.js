import { useState } from "react";

import Api from "../services/Api";

const CreateCard = (props) => {
  //fetch states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [cardURL, setCardURL] = useState("");

  const handleFetch = (ev) => {
    ev.preventDefault();
    Api(props.data).then((responseData) => {
      console.log("pasa por aquí");
      setCardURL(responseData.cardURL);

      if (responseData.success === false) {
        setError(responseData.error);

        setSuccess("");
      } else if (responseData.success === true) {
        setSuccess(responseData.cardURL);
        setError("");
      }
    });
  };

  return (
    <section className={`create ${props.collapsable3}`}>
      <button className="create__btn" name="create" onClick={handleFetch}>
        <i className="far fa-address-card create__address"></i>crear tarjeta
      </button>

      {success !== "" ? (
        <div className="created">
          <h3 className="created__title">La tarjeta ha sido creada:</h3>
          <a
            title="Link"
            rel="noreferrer"
            href={cardURL}
            target="_blank"
            className="created__url"
          >
            {cardURL}
          </a>
          <button className="created__btn twitter--button">
            <a
              rel="noreferrer"
              href={success}
              target="_blank"
              className="created__btn--text twitter--link"
            >
              <i className="fab fa-twitter created__btn--icon"></i>
              Compartir en Twitter
            </a>
          </button>
        </div>
      ) : (
        ""
      )}

      {error !== "" ? (
        <div className="created">
          <h3 className="created__title">La tarjeta NO ha sido creada:</h3>
          <p>{error}</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default CreateCard;
