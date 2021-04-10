import './Header.css';
import Liveclass from '../../assets/liveclass.svg';
import Meet from '../../assets/Meet.png';
import Mouse from '../../assets/Mouse.svg';
import { Link } from 'react-scroll';

function Header() {
  return (
    <section className="header">
      <img src={ Liveclass } alt="Logo liveclass" className="header_logo" />
      <div className="header_content">
        <div className="header_text">
          <h1>Terapia em Grupo</h1>
          <h2>Aprenda a lidar com a culpa e o arrependimento e pare de remoer as possibilidades do futuro.</h2>
          <p>2x por semana, você vai participar de uma sessão de terapia em grupo, acompanhada por um psicólogo, onde vai poder expor e compartilhar suas dores e angústias, dividindo com outras pessoas os problemas da vida cotidiana.</p>
          <button className="header_btn">Assinar club</button>
        </div>
        <img src={ Meet } alt='Imagem Meet' className="header_img" />
      </div>
      <Link
        to="toContent"
        spy={ true }
        smooth={ true }
        offset={ -95 }
        duration={ 800 }
        title='Saiba mais'
        className="header_scrollMouse"
      >
        <img src={ Mouse } alt='Scroll down'  />
      </Link>
    </section>
  )
}

export default Header;
