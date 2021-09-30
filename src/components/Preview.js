import '../styles/core/variables.scss';
import '../styles/core/reset.scss';
import '../styles/core/mixins.scss';
import '../styles/layout/preview.scss';

const Preview = (props) => {
  const handleClickReset = () => {
    window.location.reload(false);
  };

  return (
    <section className='preview'>
      <div>
        <button className='preview--button' onClick={handleClickReset}>
          <i className='far fa-trash-alt'></i> Reset
        </button>
        {/* tarjeta de previsualización */}
        <div className={`preview--card  palette1 ${props.palettePreview}`}>
          <div className='preview--card__info'>
            <div className='preview--edge'></div>
            <div className='info'>
              <h2 className='name'>{props.renderName}</h2>
              <h3 className='proffesion'>{props.renderJob}</h3>
            </div>
          </div>
          {/* tarjeta de previsualización */}
          <div
            className='image-preview profile__image'
            style={{
              backgroundImage: `url(${props.imageData})`,
            }}
          ></div>
          <div className='icons'>
            <a
              rel='noreferrer'
              href={`tel: ${props.phone}`}
              target='_blank'
              className='icons--border'
              id='tel'
            >
              <i className='fas fa-mobile-alt'></i>
            </a>
            <a
              rel='noreferrer'
              href={`mailto: ${props.email}`}
              target='_blanck'
              className='icons--border'
              id='email'
            >
              <i className='far fa-envelope'></i>
            </a>
            <a
              rel='noreferrer'
              href={`https://www.linkedin.com/in/${props.linkedin}`}
              target='_blank'
              className='icons--border'
              id='linkedin'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a
              rel='noreferrer'
              href={`https://www.github.com/${props.github}`}
              target='_blank'
              className='icons--border'
              id='github'
            >
              <i className='fab fa-github-alt'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
