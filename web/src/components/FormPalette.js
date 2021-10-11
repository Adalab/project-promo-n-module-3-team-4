import "../styles/core/variables.scss";
import "../styles/core/mixins.scss";

const FormPalette = (props) => {
  return (
    <div className="design-form__palette--item">
      {/* Paleta1  */}
      <input
        type="radio"
        id={props.paletteId}
        value={props.paletteValue}
        name="palette"
        className="design-form__palette--radio"
        onChange={props.handlePalettes}
        checked={props.palettesChecked}
      />
      <img
        src={props.paletteImg}
        className="design-form__palette--image"
        alt={props.paletteAlt}
      />
    </div>
  );
};
export default FormPalette;
