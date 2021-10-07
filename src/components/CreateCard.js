const CreateCard = (props) => {
  return (
    <>
      <section className={`create ${props.collapsable3}`}>
        <button className='create__btn js-createBtn' name='create'>
          <i className='far fa-address-card create__address'></i>crear tarjeta
        </button>

        <div className={`created ${props.twitterButton}`}>
          <h3 className='created__title'>La tarjeta ha sido creada:</h3>
          <a rel='noreferrer' href='' target='_blank' className='created__url '>
            {props.dataUrl}
          </a>
          <button
            className='created__btn twitter--button'
            onClick={props.clickHandleShareLink}
          >
            <a
              rel='noreferrer'
              href='/#'
              className='created__btn--text twitter--link'
            >
              {props.twitterButton}
              <i className='fab fa-twitter created__btn--icon'></i>
              Compartir en Twitter
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default CreateCard;
