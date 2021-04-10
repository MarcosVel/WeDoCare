import './Content.css';
import Journal from '../../assets/Journal.svg';
import Podcast from '../../assets/Podcast.svg';

function Content() {
  return (
    <section className="content">
      <div className="content_journal">
        <div className="content_text">
          <h3>Emoti Journal</h3>
          <p className="page_text">Ao final de cada ciclo terapêutico, o participante será orientado a registrar em seu diário a evolução de seus sentimentos  e percepções.</p>
        </div>
        <img src={ Journal } alt='Journal' />
      </div>
      <div className="content_journal">
        <img src={ Podcast } alt='Journal' />
        <div className="content_text">
          <h3>Podcast</h3>
          <p className="page_text">Ao final de cada ciclo terapêutico, o participante será orientado a registrar em seu diário a evolução de seus sentimentos  e percepções.</p>
        </div>
      </div>
      <div className="content_podcast">

      </div>
    </section>
  )
}

export default Content;
