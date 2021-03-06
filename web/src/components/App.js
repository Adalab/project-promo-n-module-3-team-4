import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
//styles
import "../styles/main.scss";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Preview from "../components/Preview";
import Collapsable from "./Collapsable";
import FormPalette from "./FormPalette";
import CreateCard from "./CreateCard";
import FormInput from "./FormInput";
import ImageReader from "./ImageReader";
import Landing from "../Landing";

//images
import palette1 from "../images/palette1.png";
import palette2 from "../images/palette2.png";
import palette3 from "../images/palette3.png";
import randomPic from "../images/avatar-woman.png";

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

  //FORMULARIO

  //Palette radios
  const [palettes, setPalettes] = useState("");

  const handlePalettes = (ev) => {
    setPalettes(ev.target.value);
    setData({
      ...data,
      palette: ev.currentTarget.value,
    });
  };

  //Objeto donde guardamos los datos
  const [data, setData] = useState({
    palette: "",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "",
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

  //Imagen
  const [image, setImage] = useState(randomPic);

  const handleImage = (imageData) => {
    setImage(imageData);
    setData({ ...data, photo: imageData });
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/card">
          <Header />
          <main>
            <div className="mediaqueries">
              <Preview
                palettePreview={palettes}
                renderName={renderData}
                renderJob={renderDataJob}
                imageData={image}
                phone={data.phone}
                email={data.email}
                linkedin={data.linkedin}
                github={data.github}
              />
              <section className="mediaqueries-form">
                <section className="design wrapper container">
                  {/* Collapsable */}
                  <Collapsable
                    handleCollapsable={handleCollapsable1}
                    text={"Diseña"}
                    arrow={arrow1}
                    image={"far fa-object-ungroup dropdown__ungroup"}
                  />
                  <div className={`design-form ${collapsable1}`}>
                    <h3 className="design-form__description">colores</h3>
                    <form
                      action="#"
                      method="get"
                      className="design-form__palette"
                    >
                      {/* COMPONENTE DE LAS IMAGENES/FORM */}
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
                    image={"far fa-keyboard dropdown__ungroup"}
                  />
                  <div className="fill wrapper container2">
                    <form
                      className={`fill__form js-collapsable2 ${collapsable2}`}
                      action=""
                      method="post"
                    >
                      {/* Label e Input */}
                      <FormInput
                        htmlFor={"name"}
                        text={"Nombre Completo"}
                        placeholder={"Ej: Unicorn Unicorn"}
                        id={"name"}
                        type={"text"}
                        name={"name"}
                        value={data.name}
                        handleInput={handleInput}
                      />
                      <FormInput
                        htmlFor={"job"}
                        text={"Puesto"}
                        placeholder={"Ej: Front-end Unicorn"}
                        id={"job"}
                        type={"text"}
                        name={"job"}
                        value={data.job}
                        handleInput={handleInput}
                      />
                      <ImageReader
                        handleImage={handleImage}
                        dataImage={image}
                      />
                      <FormInput
                        htmlFor={"email"}
                        text={"Email"}
                        placeholder={"Ej: sally-hill@gmail.com"}
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={data.email}
                        handleInput={handleInput}
                      />
                      <FormInput
                        htmlFor={"phone"}
                        text={"Teléfono"}
                        placeholder={"Ej: 555-55-55-55"}
                        id={"phone"}
                        type={"tel"}
                        name={"phone"}
                        value={data.phone}
                        handleInput={handleInput}
                      />
                      <FormInput
                        htmlFor={"linkedin"}
                        text={"Linkedin"}
                        placeholder={"Ej: sally-hill-205391217/"}
                        id={"linkedin"}
                        type={"text"}
                        name={"linkedin"}
                        value={data.linkedin}
                        handleInput={handleInput}
                      />
                      <FormInput
                        htmlFor={"github"}
                        text={"Github"}
                        placeholder={"Ej: sally-hill"}
                        id={"github"}
                        type={"text"}
                        name={"github"}
                        value={data.github}
                        handleInput={handleInput}
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
                    image={"far fa-share-alt  dropdown__ungroup"}
                  />
                  {/* componente crear tarjeta */}
                  <CreateCard data={data} collapsable3={collapsable3} />
                  {/* termina crear tarjeta  */}
                </section>
              </section>
            </div>
          </main>
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
