import '../styles/main.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preview from '../components/Preview';
import Collapsable from './Collapsable';
import palette1 from '../images/palette1.png';
import palette2 from '../images/palette2.png';
import palette3 from '../images/palette3.png';

import { useState } from 'react';

function App() {
  const [collapsable1, setCollapsable1] = useState('');
  const [collapsable2, setCollapsable2] = useState('hidden');
  const [collapsable3, setCollapsable3] = useState('hidden');
  //flechas
  const [arrow1, setArrow1] = useState('upDown');
  const [arrow2, setArrow2] = useState('');
  const [arrow3, setArrow3] = useState('');

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

  //Palette radios
  const [palettes, setPalettes] = useState('palette1');

  const handlePalettes = (ev) => {
    setPalettes(ev.target.value);
    setData({
      ...data,
      palette: ev.currentTarget.value,
    });
  };

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
    const dataInput = ev.currentTarget.name;
    if (dataInput === 'name') {
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

  //estas dos variables y sus ifs habria que pasarlos a preview o se dejan aqui ¿?
  let renderData;
  if (data.name === '') {
    renderData = 'Unicornio Unicornio';
  } else {
    renderData = data.name;
  }

  let renderDataJob;
  if (data.job === '') {
    renderDataJob = 'Front End Unicornio';
  } else {
    renderDataJob = data.job;
  }

  //función para que al pulsar el botón de reset se refresque la página y se borre todo lo escrito en el formulario/tarjeta.
  // const handleClickReset = () => {
  //   window.location.reload(false);
  // };

  return (
    <div>
      <Header />
      <main>
        <div className='mediaqueries'>
          <Preview
            palettePreview={palettes}
            renderName={renderData}
            renderJob={renderDataJob}
          />
          <section className='mediaqueries-form'>
            <nav className='js-form'>
              <section className='design wrapper container'>
                {/* Collapsable */}
                <Collapsable
                  handleCollapsable={handleCollapsable1}
                  text={'Diseña'}
                  arrow={arrow1}
                />
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
                        value='palette1'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handlePalettes}
                        checked={palettes === 'palette1'}
                      />
                      <img
                        src={palette1}
                        className='design-form__palette--image'
                        alt='colour palette 1'
                      />
                    </div>
                    <div className='design-form__palette--item'>
                      {/* Paleta  */}
                      <input
                        type='radio'
                        id='palette2'
                        value='palette2'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handlePalettes}
                        checked={palettes === 'palette2'}
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
                        value='palette3'
                        name='palette'
                        className='design-form__palette--radio'
                        onChange={handlePalettes}
                        checked={palettes === 'palette3'}
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
              <section className='fill wrapper '>
                {/* Collapsable */}
                <Collapsable
                  handleCollapsable={handleCollapsable2}
                  text={'Rellena'}
                  arrow={arrow2}
                />
                <div className='fill wrapper container2'>
                  <form
                    className={`fill__form js-collapsable2 ${collapsable2}`}
                    action=''
                    method='post'
                  >
                    {/* Label e Input */}
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
                {/* Componente con flecha y colapsable */}
                <Collapsable
                  handleCollapsable={handleCollapsable3}
                  text={'Comparte'}
                  arrow={arrow3}
                />
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
                        href='/#'
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
      <Footer />
    </div>
  );
}

export default App;
