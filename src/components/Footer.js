//import "../styles/core/variables.scss";
import '../styles/core/reset.scss';
import '../styles/core/mixins.scss';
import '../styles/layout/footer.scss';
import logoAdalab from '../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <small className='info-footer'>awesom profile-cards @2018</small>
      <img className='logo-adalab' src={logoAdalab} alt='logo-adalab' />
    </footer>
  );
};

export default Footer;
