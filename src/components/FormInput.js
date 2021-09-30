const FormInput = (props) => {
  return (
    <>
      {/* Label e Input */}
      <label className='style_label' htmlFor={props.htmlFor}>
        {props.text}
      </label>
      <input
        className='style_input'
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
        // value={data.name}
        onChange={props.handleInput}
        required
      />
    </>
  );
};

export default FormInput;
