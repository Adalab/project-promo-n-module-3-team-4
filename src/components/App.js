import "../styles/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preview from "../components/Preview";
import Collapsable from "./Collapsable";
import FormPalette from "./FormPalette";
import palette1 from "../images/palette1.png";
import palette2 from "../images/palette2.png";
import palette3 from "../images/palette3.png";
import Api from "../services/Api";

import { useEffect, useState } from "react";
import CreateCard from "./CreateCard";

function App() {
  const [collapsable1, setCollapsable1] = useState("");
  const [collapsable2, setCollapsable2] = useState("hidden");
  const [collapsable3, setCollapsable3] = useState("hidden");
  //flechas
  const [arrow1, setArrow1] = useState("upDown");
  const [arrow2, setArrow2] = useState("");
  const [arrow3, setArrow3] = useState("");

  //función para collapsable 1
  const handleCollapsable1 = () => {
    if (collapsable1 === "") {
      setCollapsable1("hidden");
      setArrow1("");
    } else if (collapsable1 === "hidden") {
      setCollapsable1("");
      setArrow1("upDown");
    }
  };
  //función para collapsable 2
  const handleCollapsable2 = () => {
    if (collapsable2 === "") {
      setCollapsable2("hidden");
      setArrow2("");
    } else if (collapsable2 === "hidden") {
      setCollapsable2("");
      setArrow2("upDown");
    }
  };
  // función para collapsable 3
  const handleCollapsable3 = () => {
    if (collapsable3 === "") {
      setCollapsable3("hidden");
      setArrow3("");
    } else if (collapsable3 === "hidden") {
      setCollapsable3("");
      setArrow3("upDown");
    }
  };

  //USE EFFECT
  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    callToApi(setData).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setData(response);
    });
    // Este useEffect depende de searchName por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [setData]);

  //FORMULARIO

  //Palette radios
  const [palettes, setPalettes] = useState("palette1");

  const handlePalettes = (ev) => {
    setPalettes(ev.target.value);
    setData({
      ...data,
      palette: ev.currentTarget.value,
    });
  };

  const [data, setData] = useState({
    palette: "",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  console.log(data);

  const handleInput = (ev) => {
    const dataInput = ev.currentTarget.name;
    if (dataInput === "name") {
      setData({
        ...data,
        name: ev.currentTarget.value,
      });
    } else if (dataInput === "job") {
      setData({
        ...data,
        job: ev.currentTarget.value,
      });
    } else if (dataInput === "email") {
      setData({
        ...data,
        email: ev.currentTarget.value,
      });
    } else if (dataInput === "phone") {
      setData({
        ...data,
        phone: ev.currentTarget.value,
      });
    } else if (dataInput === "linkedin") {
      setData({
        ...data,
        linkedin: ev.currentTarget.value,
      });
    } else if (dataInput === "github") {
      setData({
        ...data,
        github: ev.currentTarget.value,
      });
    }
  };

  //estas dos variables y sus ifs habria que pasarlos a preview o se dejan aqui ¿?
  let renderData;
  if (data.name === "") {
    renderData = "Unicornio Unicornio";
  } else {
    renderData = data.name;
  }

  let renderDataJob;
  if (data.job === "") {
    renderDataJob = "Front End Unicornio";
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
        <div className="mediaqueries">
          <Preview
            palettePreview={palettes}
            renderName={renderData}
            renderJob={renderDataJob}
          />
          <section className="mediaqueries-form">
            {/* <nav className='js-form'> */}
            <section className="design wrapper container">
              {/* Collapsable */}
              <Collapsable
                handleCollapsable={handleCollapsable1}
                text={"Diseña"}
                arrow={arrow1}
              />
              <div className={`design-form ${collapsable1}`}>
                <h3 className="design-form__description">colores</h3>
                <form action="#" method="get" className="design-form__palette">
                  {/* COMPONENTE DE LAS IMAGENES/FORM ¿? */}
                  <FormPalette
                    collapsable={collapsable1}
                    paletteId={"palette1"}
                    paletteValue={"palette1"}
                    handlePalettes={handlePalettes}
                    palettesChecked={palettes === "palette1"}
                    paletteImg={palette1}
                    paletteAlt="colour palette 1"
                  />
                  <FormPalette
                    collapsable={collapsable2}
                    paletteId={"palette2"}
                    paletteValue={"palette2"}
                    handlePalettes={handlePalettes}
                    palettesChecked={palettes === "palette2"}
                    paletteImg={palette2}
                    paletteAlt="colour palette 2"
                  />
                  <FormPalette
                    collapsable={collapsable3}
                    paletteId={"palette3"}
                    paletteValue={"palette3"}
                    handlePalettes={handlePalettes}
                    palettesChecked={palettes === "palette3"}
                    paletteImg={palette3}
                    paletteAlt="colour palette 3"
                  />
                </form>
              </div>
            </section>
            <section className="fill wrapper test">
              {/* Collapsable */}
              <Collapsable
                handleCollapsable={handleCollapsable2}
                text={"Rellena"}
                arrow={arrow2}
              />
              <div className="fill wrapper container2">
                <form
                  className={`fill__form js-collapsable2 ${collapsable2}`}
                  action=""
                  method="post"
                >
                  {/* Label e Input */}
                  <label className="style_label" htmlFor="name">
                    Nombre completo
                  </label>
                  <input
                    className="style_input js_name"
                    placeholder="Ej: Sally Jill"
                    id="name"
                    type="text"
                    name="name"
                    // value={data.name}
                    onChange={handleInput}
                    required
                  />

                  <label className="style_label" htmlFor="job">
                    Puesto
                  </label>
                  <input
                    className="style_input js_job"
                    placeholder="Ej: Front-end unicorn"
                    id="job"
                    type="text"
                    name="job"
                    onChange={handleInput}
                    required
                  />

                  <div className="fill__addPic action ">
                    <h5 className="fill__addPic--title">Imagen de perfil </h5>

                    <div className="fill__addPic--item">
                      <label
                        className="action__upload-btn fill__addPic--button"
                        htmlFor="photo"
                      >
                        Añadir imagen
                      </label>

                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        className=" hidden js__profile-upload-btn"
                      />

                      {/*<!-- <button className="fill__addPic--button"> Añadir imagen </button>--> */}
                      <div className="fill__addPic--pic profile__preview js__profile-preview"></div>
                    </div>
                  </div>

                  <label className="style_label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="style_input js_email"
                    placeholder="Ej:sally-hill@gmail.com"
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleInput}
                    required
                  />

                  <label className="style_label" htmlFor="phone">
                    Teléfono{" "}
                  </label>
                  <input
                    className="style_input js_tel"
                    placeholder="Ej: 555-55-55-55"
                    id="phone"
                    type="tel"
                    name="phone"
                    onChange={handleInput}
                  />

                  <label className="style_label" htmlFor="linkedin">
                    Linkedin
                  </label>
                  <input
                    className="style_input js_linkedin"
                    placeholder="Ej: sally -hill-205391217/"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    onChange={handleInput}
                    required
                  />

                  <label className="style_label" htmlFor="github">
                    Github
                  </label>
                  <input
                    className="style_input js_github"
                    placeholder="Ej: sally-hill"
                    id="github"
                    type="text"
                    name="github"
                    onChange={handleInput}
                    required
                  />
                </form>
              </div>
            </section>
            <section className="share wrapper">
              {/* Colapsable */}
              <Collapsable
                handleCollapsable={handleCollapsable3}
                text={"Comparte"}
                arrow={arrow3}
              />
              {/* componente crear tarjeta */}
              <CreateCard collapsable3={collapsable3} />

              {/* termina crear tarjeta  */}
            </section>
            {/* </nav> */}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
