import '../styles/core/variables.scss';
import '../styles/core/reset.scss';
import '../styles/core/mixins.scss';
import '../styles/layout/form.scss';

const Collapsable = (props) => {
  return (
    <div className='dropdown' onClick={props.handleCollapsable}>
      <div className='dropdown__header'>
        <i className='far fa-object-ungroup dropdown__ungroup'></i>
        <h2 className='dropdown__title'>{props.text}</h2>
      </div>
      <div className='js-arrow'>
        <i className={`js-chevron fas fa-chevron-down ${props.arrow}`}></i>
      </div>
    </div>
  );
};

export default Collapsable;
