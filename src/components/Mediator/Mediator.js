import './Mediator.css';
import BackCirculo from '../../assets/CirculoMediator.svg';

function Mediator() {
  return (
    <section className="mediator_section">
      <div className="mediator_text">
        <h3 className="mediator_title">Mediador</h3>
        <p className="page_text">Toda a sessão será conduzida pelo psicólogo Fábio Caló, mestre em análise do comportamento, tendo como principais áreas de intervenção: terapia de casal, terapia comportamental e sexual.</p>
      </div>
      <img src={ BackCirculo } alt="Mediador" className="back_circulo" />
    </section>
  )
}

export default Mediator;
