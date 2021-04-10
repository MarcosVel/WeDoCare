import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Mediator from './components/Mediator/Mediator';
import VideoWorks from './components/VideoWorks/VideoWorks';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Mediator />
      <VideoWorks />
    </div>
  );
}

export default App;
