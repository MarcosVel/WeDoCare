import './Content.css';
import Journal from '../../assets/Journal.svg';
import Podcast from '../../assets/Podcast.svg';

function Content() {
  return (
    <section className="content_section">
      <div className="content">
        <div className="content_text">
          <h3>Emoti Journal</h3>
          <p className="page_text">Ao final de cada ciclo terapêutico, o participante será orientado a registrar em seu diário a evolução de seus sentimentos  e percepções.</p>
        </div>
        <img src={ Journal } alt='Journal' />
      </div>
      <div className="content">
        <img src={ Podcast } id='podcast_img' alt='Podcast' />
        <div className="content_text">
          <h3>Podcast</h3>
          <p className="page_text">Com temas atuais e que abordam assuntos importantes e determinantes para diversas fases da sua vida, o participante poderá incrementar seu processo terapêutico.</p>
        </div>
      </div>
    </section>
  )
}

export default Content;
