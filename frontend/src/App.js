import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Click from './components/Click';
import ClickClass from './components/ClickClass';

function App() {
  return (
    <div className="text-danger">
      {/* <Counter /> */}
      <Click />
      <ClickClass />
      {/* <Greet name = "Chaosick" game = "Lost Ark"><p>To jest dziaciak</p></Greet>
      <Greet name = "Shoodefaka" game = "Path of Excile"><button>+1 wariacie</button></Greet>
      <Greet name = "Kwisek" game = "Życie"/>
      <Welcome name = "Chaosick" game = "Lost Ark" />
      <Welcome name = "Shoodefaka" game = "Path of Excile" />
      <Welcome name = "Kwisek" game = "Życie"/> */}
       {/* <Hello /> */}
    </div>
  );
}

export default App;
