import './Header.css';
import Liveclass from '../../assets/liveclass.svg';
import Meet from '../../assets/Meet.png';

function index() {
  return (
    <section className="header">
      <img src={ Liveclass } className="header_logo" />
      <div className="header_content">
        <div className="header_text">
          <h1>Terapia em Grupo</h1>
          <h3>Aprenda a lidar com a culpa e o arrependimento e pare de remoer as possibilidades do futuro.</h3>
          <p>2x por semana, você vai participar de uma sessão de terapia em grupo, acompanhada por um psicólogo, onde vai poder expor e compartilhar suas dores e angústias, dividindo com outras pessoas os problemas da vida cotidiana.</p>
        </div>
        <img src={ Meet } className="header_img" />
      </div>
    </section>
  )
}

export default index;
