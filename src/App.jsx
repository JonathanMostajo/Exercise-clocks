import './App.css';
import Countdown from './components/CountDown/CountDown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import StopWatch from './components/StopWatch/StopWatch';

function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <StopWatch/>
    </div>
  );
}

export default App;
