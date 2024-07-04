import Moment from 'react-moment';
import './App.css';
import Clock from 'react-live-clock';
import 'moment/locale/pt-br';

function App() {
  return (
    <div className="App">
      <div className="container-clock">
      <div className="clock">
        <Clock format={'HH:mm:ss'} ticking={true} />
      </div>
        <div className='date'>
          <Moment locale="pt-br" format="LL">{new Date()}</Moment>
        </div>
      </div>
    </div>
  );
}

// backgorunds
// https://i.pinimg.com/originals/0d/2e/72/0d2e72e0a5cb1c3eac3225e390907cc4.gif
export default App;
