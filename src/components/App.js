import '../styles/main.scss';
import logo from '../images/logo-awesome-profile-cards.svg';
import palette1 from '../images/palette1.png';
import palette2 from '../images/palette2.png';
import palette3 from '../images/palette3.png';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';

function App() {
  const [collapsable1, setCollapsable1] = useState('');
  const [collapsable2, setCollapsable2] = useState('hidden');
  const [collapsable3, setCollapsable3] = useState('hidden');
  //flechas
  const [arrow1, setArrow1] = useState('upDown');
  const [arrow2, setArrow2] = useState('');
  const [arrow3, setArrow3] = useState('');

  //Palette radios
  const [paletteRadio, setPaletteRadio] = useState(true);
  // const [paletteRadio2, setPaletteRadio2] = useState(false);
  // const [paletteRadio3, setPaletteRadio3] = useState(false);

  //función para collapsable 1
  const handleCollapsable1 = () => {
    if (collapsable1 === '') {
      setCollapsable1('hidden');
      setArrow1('');
    } else if (collapsable1 === 'hidden') {
      setCollapsable1('');
      setArrow1('upDown');
    }
  };
  //función para collapsable 2
  const handleCollapsable2 = () => {
    if (collapsable2 === '') {
      setCollapsable2('hidden');
      setArrow2('');
    } else if (collapsable2 === 'hidden') {
      setCollapsable2('');
      setArrow2('upDown');
    }
  };
  // función para collapsable 3
  const handleCollapsable3 = () => {
    if (collapsable3 === '') {
      setCollapsable3('hidden');
      setArrow3('');
    } else if (collapsable3 === 'hidden') {
      setCollapsable3('');
      setArrow3('upDown');
    }
  };

  //FORMULARIO
  const [data, setData] = useState({
    palette: '',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });

  console.log(data);

  const handleInput = (ev) => {
    const paletteColor = ev.target.value;
    const dataInput = ev.currentTarget.name;
    //hemos añadido este if para intentar cambiar la paleta seleccionada y guardarla en el objeto
    if (paletteColor === 'palette1') {
      setData({
        ...data,
        palette: palette1,
      });
    } else if (dataInput === 'name') {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (dataInput === 'job') {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (dataInput === 'email') {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (dataInput === 'phone') {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (dataInput === 'linkedin') {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else if (dataInput === 'github') {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
  };

  let renderData;
  if (data.name === '') {
    renderData = 'unicornio';
  } else {
    renderData = data.name;
  }

  let renderDataJob;
  if (data.job === '') {
    renderDataJob = 'NINI';
  } else {
    renderDataJob = data.job;
  }

  return (
    <div>
      <main className='main-card'>
        <header className='header'>
          <a rel='noreferrer' href='index.html'>
            <img className='logo-awesome-header' src={logo} alt='' />
          </a>
        </header>
        <div className='mediaqueries'>
          <section className='preview'>
            <div>
              <button className='preview--button  js-reset'>
                <i className='far fa-trash-alt'></i> Reset
              </button>
              <div className='preview--card  palette1 js-edge'>
                <div className='preview--card__info'>
                  <div className='preview--edge'></div>
                  <div className='info'>
                    <h2 className='name js_namePreview'>{renderData}</h2>
                    <h3 className='proffesion js_jobPreview'>
                      {renderDataJob}
                    </h3>
                  </div>
                </div>
                <div
                  className='image-preview profile__image js__profile-image'
                  style={{
                    backgroundImage:
                      'url(https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE)',
                  }}
                ></div>
                <div className='icons'>
                  <a
                    rel='noreferrer'
                    href={`tel: ${data.phone}`}
                    target='_blank'
                    className='icons--border js-icons js_telPreview'
                    id='tel'
                  >
                    <i className='fas fa-mobile-alt'></i>
                  </a>
                  <a
                    rel='noreferrer'
                    href={`mailto: ${data.email}`}
                    target='_blanck'
                    className='icons--border js_emailPreview'
                    id='email'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <a
                    rel='noreferrer'
                    href={`https://www.linkedin.com/in/${data.linkedin}`}
                    target='_blank'
                    className='icons--border js_linkedinPreview'
                    id='linkedin'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a
                    rel='noreferrer'
                    href={`https://www.github.com/${data.github}`}
                    target='_blank'
                    className='icons--border js_githubPreview'
                    id='github'
                  >
                    <i className='fab fa-github-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className='mediaqueries-form'>
            <nav className='js-form'>
              <section className='design wrapper container'>
                <div className='dropdown' onClick={handleCollapsable1}>
                  <div className='dropdown__header'>
                    <i className='far fa-object-ungroup dropdown__ungroup'></i>
                    <h2 className='dropdown__title'>diseña</h2>
                  </div>
                  {/* 1a flecha  */}
                  <div className='js-arrow'>
                    <i
                      className={`js-chevron fas fa-chevron-down ${arrow1}`}
                    ></i>
                  </div>
                </div>

                <div className={`design-form js-collapsable ${collapsable1}`}>
                  <h3 className='design-form__description'>colores</h3>
                  <form
                    action='#'
                    method='get'
                    className='design-form__palette js-form'
                  >
                    <div className='design-form__palette--item'>
                      <input
                        type='radio'
                        id='palette1'
                        value='1'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handleInput}
                        // checked
                      />
                      <img
                        src={palette1}
                        className='design-form__palette--image'
                        alt='colour palette 1'
                      />
                    </div>
                    <div className='design-form__palette--item'>
                      <input
                        type='radio'
                        id='palette2'
                        value='2'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handleInput}
                      />
                      <img
                        src={palette2}
                        className='design-form__palette--image'
                        alt='colour palette 2'
                      />
                    </div>
                    <div className='design-form__palette--item'>
                      <input
                        type='radio'
                        id='palette3'
                        value='3'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handleInput}
                      />
                      <img
                        src={palette3}
                        className='design-form__palette--image'
                        alt='colour palette 3'
                      />
                    </div>
                  </form>
                </div>
              </section>
              <section>
                <div className='fill wrapper container2'>
                  <div className='fill__dropdown' onClick={handleCollapsable2}>
                    <div className='fill__dropdown--icon'>
                      <i className='far fa-keyboard'></i>
                      <h2 className='fill__dropdown--title'> RELLENA</h2>
                    </div>
                    {/* 2a flecha */}
                    <div className=' fill__dropdown--arrow .js-arrow2'>
                      <i
                        className={`fas fa-chevron-down js-chevron2 ${arrow2}`}
                      ></i>
                    </div>
                  </div>
                  <form
                    className={`fill__form js-collapsable2 ${collapsable2}`}
                    action=''
                    method='post'
                  >
                    <label className='style_label' htmlFor='name'>
                      Nombre completo
                    </label>
                    <input
                      className='style_input js_name'
                      placeholder='Ej: Sally Jill'
                      id='name'
                      type='text'
                      name='name'
                      // value={data.name}
                      onChange={handleInput}
                      required
                    />

                    <label className='style_label' htmlFor='job'>
                      Puesto
                    </label>
                    <input
                      className='style_input js_job'
                      placeholder='Ej: Front-end unicorn'
                      id='job'
                      type='text'
                      name='job'
                      onChange={handleInput}
                      required
                    />

                    <div className='fill__addPic action '>
                      <h5 className='fill__addPic--title'>Imagen de perfil </h5>

                      <div className='fill__addPic--item'>
                        <label
                          className='action__upload-btn fill__addPic--button'
                          htmlFor='photo'
                        >
                          Añadir imagen
                        </label>

                        <input
                          type='file'
                          name='photo'
                          id='photo'
                          className=' hidden js__profile-upload-btn'
                        />

                        {/*<!-- <button className="fill__addPic--button"> Añadir imagen </button>--> */}
                        <div className='fill__addPic--pic profile__preview js__profile-preview'></div>
                      </div>
                    </div>

                    <label className='style_label' htmlFor='email'>
                      Email
                    </label>
                    <input
                      className='style_input js_email'
                      placeholder='Ej:sally-hill@gmail.com'
                      id='email'
                      type='email'
                      name='email'
                      onChange={handleInput}
                      required
                    />

                    <label className='style_label' htmlFor='phone'>
                      Teléfono{' '}
                    </label>
                    <input
                      className='style_input js_tel'
                      placeholder='Ej: 555-55-55-55'
                      id='phone'
                      type='tel'
                      name='phone'
                      onChange={handleInput}
                    />

                    <label className='style_label' htmlFor='linkedin'>
                      Linkedin
                    </label>
                    <input
                      className='style_input js_linkedin'
                      placeholder='Ej: sally -hill-205391217/'
                      id='linkedin'
                      type='text'
                      name='linkedin'
                      onChange={handleInput}
                      required
                    />

                    <label className='style_label' htmlFor='github'>
                      Github
                    </label>
                    <input
                      className='style_input js_github'
                      placeholder='Ej: sally-hill'
                      id='github'
                      type='text'
                      name='github'
                      onChange={handleInput}
                      required
                    />
                  </form>
                </div>
              </section>
              <section className='share wrapper'>
                <div className='dropdown' onClick={handleCollapsable3}>
                  <div className='dropdown__header'>
                    <i className='far fa-share-alt dropdown__ungroup'></i>
                    <h2 className='dropdown__title'>comparte</h2>
                  </div>
                  {/* tercera flecha */}
                  <div>
                    <i
                      className={`js-chevron3 fas fa-chevron-down ${arrow3}`}
                    ></i>
                  </div>
                </div>

                <section className={`create js-collapsable3 ${collapsable3}`}>
                  <button className='create__btn js-createBtn' name='create'>
                    <i className='far fa-address-card create__address'></i>crear
                    tarjeta
                  </button>

                  <div className='created hidden js-cardCreated'>
                    <h3 className='created__title'>
                      La tarjeta ha sido creada:
                    </h3>
                    {/* <a rel="noreferrer" href="" target="_blank" className="created__url js-url"></a> */}
                    <button className='created__btn twitter--button'>
                      <a
                        rel='noreferrer'
                        href='#'
                        className='created__btn--text twitter--link'
                      >
                        <i className='fab fa-twitter created__btn--icon'></i>
                        Compartir en Twitter
                      </a>
                    </button>
                  </div>
                </section>
              </section>
            </nav>
          </section>
        </div>
      </main>

      <footer className='footer'>
        <small className='info-footer'>awesom profile-cards @2018</small>
        <img className='logo-adalab' src={logoAdalab} alt='logo-adalab' />
      </footer>
    </div>
  );
}

export default App;
