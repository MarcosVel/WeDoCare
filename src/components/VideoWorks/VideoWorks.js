import './VideoWorks.css';

function VideoWorks() {
  return (
    <section className="video_section">
      <h3 className="video_title">Assista o vídeo para entender como funciona o Live Class</h3>
      <iframe width="812" height="458" src="https://www.youtube.com/embed/QoMjmy8sMN0" frameborder="0" className="video_player" />
      <div className="video_price">
        <h4>Assinatura Anual</h4>
        <h5>R$<span>29</span>,23</h5>
      </div>
      <button className="video_btn">Assinar conteúdo exclusivo</button>
    </section>
  )
}

export default VideoWorks;
